const express = require('express');

const { getElementById, getIndexById, updateElement,
    seedElements, createElement } = require('./utils');

const animals = [];
seedElements(animals, 'animals');

// create instance routes : animalsRouter
const animalsRouter = express.Router();

animalsRouter.get('/', (req, res, next) => {
  res.send(animals);
})

animalsRouter.get('/:id', (req, res, next) => {
  res.send(getElementById(req.params.id, animals));
}) 

animalsRouter.put('/:id', (req, res, next) => {
  const index = getIndexById(req.params.id, animals);
  if (index !== -1 ) {
    res.send(updateElement(req.params.id, req.query, animals));
  } else {
    res.status(404).send();
  }
})

animalsRouter.post('/', (req, res, next) => {
  const animalsIndex = createElement('animals', req.query);
  if (animalsIndex) {
    animals.push(animalsIndex);
    res.status(201).send(animalsIndex);
  } else {
    res.status(400).send();
  }
});

animalsRouter.delete('/:id', (req, res, next) => {
  const indexAnimals = getIndexById(req.params.id, animals);

  if (indexAnimals !== -1) {
    animals.splice(indexAnimals, req.params.id);
    res.status(204).send();
  } else {
    res.status(404).send();
  }

});

module.exports = animalsRouter;