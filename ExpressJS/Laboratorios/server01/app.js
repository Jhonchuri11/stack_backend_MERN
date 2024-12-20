" aqui creamos nuestro primer servidor express, debemos importar los siguientes módulos"

// import module express
const express = require('express');

// create instance express
const app = express();

const { getElementById, getIndexById, updateElement, seedElements, createElement  } = require('./utils');

// define port on listen for default 3000
const PORT = process.env.PORT || 4001;

// Use static server to server the Express
// Garantizamos que una vez se inicializa el servidor, pueda volver a cargar el navegador
app.use(express.static('public'));

// create objet format json
const monsters = { 
    '1': 
    { name: 'cerberus', 
    age: '4'  
    },
    '2':
    { name: 'tokito', 
      age: '5'  
    }
};

// create objet animal 
const animals = [];
seedElements(animals, 'animals');

// create objet expressions
const expressions = [];
seedElements(expressions, 'expressions');

"------------- CONTROLLERS MONSTERS -------------"
// Open a call to 'app.get' :
// first controller moods -  GET 
app.get('/monsters', (req, res, next) => {

    // los servidores express envian respuestas usando el metodo .send()
    res.send(monsters);
});

// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
    console.log(req.params); // { name: 'hydra' }
    res.send(monsters[req.params.name]);
});

// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
    const monsterUpdates = req.query;
    monsters[req.params.id] = monsterUpdates;
    res.send(monsters[req.params.id]);
});


"------------- CONTROLLERS ANIMALS -------------"

// second controller animals - GET
app.get('/animals',  (req, res, nex) => {
    res.send(animals);
});

// third controller animals for valor parameter - GET by ID
app.get('/animals/:id', (req, res, next) => {

    // using function getElementById, requiere ID and array : getElementById(id, array) => funcion auxiliar
    const foundAnimals = getElementById(req.params.id, animals);
    
    // add configuration settings status codes
    // agregando configuracion de codigos de estados para los solicitudes : existentes o no existentes

    // tenemos dos formas de verificar if and else
    /*
    if (foundAnimals) {
        res.send(foundAnimals);
    } else {
        res.status(404).send('Animals not found!');
    }
    */

    // usign operartor : ternario => evaluacion condicional de una sola linea
    foundAnimals ? res.send(foundAnimals) : res.status(404).send('Animals not fount!');

});

// fourth controller using seconf method PUT
app.put('/animals/:id', (req, res, next) => {

    // Extraction index of elemet
    const index = getIndexById(req.params.id, animals);

    // la funcion auxiliar updateElement require 3 arguments:
    // id => numer ID
    // queryArguments => req.query => new objet
    // elementList => list update => animals

    if (index !== -1) {
        const updateAnimals = updateElement(req.params.id, req.query, animals);
        res.send(updateAnimals);
    } else {
        res.status(404).send('Expression not found');
    }

});

// fiveth controller using method POST
// http://localhost:4001/animals/?emoji=hola&name=Jhon
app.post('/animals', (req, res, next) => {

    // funcion auxiliar requiere two arguments:
    // elementType: expressions
    // objectCreate: new objet => emoji and name
    const receivedExpresion = createElement('animals', req.query);

    if (receivedExpresion) {
        animals.push(receivedExpresion);
        res.status(201).send(receivedExpresion);
    } else {
        res.status(400).send("Invalid expresions");
    }
});

// sixth controller using method DELETE
app.delete('/animals/:id', (req, res, next) => {
    const animalsIndex = getIndexById(req.params.id, animals);

    if (animalsIndex !== -1) {
        animals.splice(animalsIndex, req.params.id);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})


"------------- CONTROLLERS EXPRESSIONS -------------"

app.get('/expressions', (req, res, next) => {
    res.send(expressions);
});
  
app.get('/expressions/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id, expressions);
    if (foundExpression) {
      res.send(foundExpression);
    } else {
      res.status(404).send();
    }
});

// http://localhost:4001/expressions/1?emoji=hola&name=Jhon
app.put('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
      updateElement(req.params.id, req.query, expressions);
      res.send(expressions[expressionIndex]);
    } else {
      res.status(404).send();
    }
});
  
app.post('/expressions', (req, res, next) => {
    const receivedExpression = createElement('expressions', req.query);
    if (receivedExpression) {
      expressions.push(receivedExpression);
      res.status(201).send(receivedExpression);
    } else {
      res.status(400).send();
    }
});
  
app.delete('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
      expressions.splice(expressionIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).send();
    }
});
  

// call method listen on server express
app.listen(PORT, () => {
    console.log(`Server is listening on por ${PORT}`);
});

