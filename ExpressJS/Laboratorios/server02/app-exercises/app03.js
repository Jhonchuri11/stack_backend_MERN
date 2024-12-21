/*
EXERCISE 3:

Crea una ruta POST /soups. Debe agregar un nuevo nombre de sopa a 
la soupsmatriz desde la namepropiedad del req.queryobjeto. También 
debe establecer un código de estado para "Creado".

*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

app.post('/soups', (req, res, next) => {
  const queryArguments = req.query.name;

  queryArguments ? (soups.push(queryArguments), res.status(201).send(queryArguments)) : res.status(400).send('Invalid soups');

});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

