/*
EXERCISE 1: Complete la ruta GET /battlefields/:name. Envíe de vuelta el objeto
del campo de batalla si existe un campo de batalla y establezca el estado 
en 404 y envíe una respuesta vacía si no existe.
*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const battlefields = {
  fortSumter: {
    state: 'SC',
  },
  manassas: {
    state: 'VA',
  },
  gettysburg: {
    state: 'PA',
  },
  antietam: {
    state: 'MD',
  }
}

app.get('/battlefields/:name', (req, res, next) => {
  const battlefieldName = battlefields[req.params.name];
  battlefieldName ? res.send(battlefieldName) : res.status(404).send();  
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

