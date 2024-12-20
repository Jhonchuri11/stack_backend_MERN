" aqui creamos nuestro primer servidor express, debemos importar los siguientes módulos"

// import module express
const express = require('express');

// create instance express
const app = express();

const { seedElements } = require('./utils');

// define port on listen for default 3000
const PORT = process.env.PORT || 4001;

// Use static server to server the Express
// Garantizamos que una vez se inicializa el servidor, pueda volver a cargar el navegador
app.use(express.static('public'));

// create objet format json
const moods = [{ mood: 'excited about express!'}, { mood: 'route-static!'}];

// create objet animal 
const animals = [];
seedElements(animals, 'animals');

// Open a call to 'app.get' :
// first controller moods -  GET 
app.get('/moods', (req, res, next) => {

    // los servidores express envian respuestas usando el metodo .send()
    res.send(moods);
})

// second controller animals - GET
app.get('/animals',  (req, res, nex) => {
    res.send(animals);
})

// call method listen on server express
app.listen(PORT, () => {
    console.log(`Server is listening on por ${PORT}`);
});

