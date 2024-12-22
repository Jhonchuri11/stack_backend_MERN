const express = require('express');
const app = express();

const foods = ['pasta carbonara', 'bánh mì', 'cucumber salad'];

app.get('/foods/:index', (req, res, next) => {
  if (foods[req.params.index]) {
    res.send(req.params.index);
  } else {
    const err = Error('Invalid index!');
    err.status = 404;
    next(err);
  }
});

// condional terniario
const errorHandler = (err, req, res, next) => {
  const statusCode =
  err.status ? err.status : 500; 
  res.status(statusCode).send(err.message);
};

// sin operador terniario
const errorHandlers = (err, req, res, next) => {
    if (!err.status) {
      err.status = 500;
    }
    res.status(err.status).send(err.message);
  }

app.use(errorHandler);
