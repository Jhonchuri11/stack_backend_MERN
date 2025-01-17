const express = require('express');
const appleRouter = express.Router();

const apples = {
  mcintosh: {
    description: 'Classic, juicy, bright',
    priceRange: 'medium',
    color: 'green and red'
  },
  honeycrisp: {
    description: 'Crisp, sweet!',
    priceRange: 'pricey',
    color: 'red and yellow'
  },
  goldenDelicious: {
    description: 'rich, custardy',
    priceRange: 'cheap',
    color: 'yellow'
  }
}

// Finish the appleRouter.param call:

appleRouter.param('variety', (req, res, next, variety) => {
  if (!apples[variety]) {
    res.status(404).send();
  } else {
    req.variety = apples[variety];
    next();
  }
});

// Refactor the routes below to utilize your middleware:

appleRouter.get('/:variety/description', (req, res, next) => {
    res.send(apples[variety].description);
});

appleRouter.get('/:variety/price-range', (req, res, next) => {
    res.send(apples[variety].priceRange);
});

appleRouter.get('/:variety/color', (req, res, next) => {
    res.send(apples[variety].color);
});
