/*
EXERCISE 4:

Escriba una ruta para gestionar las solicitudes DELETE a /puddings/:flavor. 
Debe eliminar el pudding correcto y enviar una respuesta 204 si el nombre del 
pudding existe y enviar una respuesta 404 si no existe.

Puede utilizar las funciones auxiliares findPuddingIndexpara encontrar el índice
del pudín por sabor y deletePuddingAtIndexpara eliminar un pudín de la 
puddingFlavorsmatriz por índice.

*/
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

// code!
app.delete('/puddings/:flavor', (req, res, next) => {
  const index = findPuddingIndex(req.params.flavor);

  if (index !== -1) {
    deletePuddingAtIndex(index)
    res.status(204).send();
  } else {
    res.status(404).send();
  }

})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

