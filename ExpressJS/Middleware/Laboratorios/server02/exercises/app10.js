const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

app.use((req, res, next) => {
    console.log("Hello!");
    next();
  });
  
  app.get('/user', (req, res, next) => {
    console.log("You are visiting 'user'");
    next();
  });
  
  app.post('/user', (req, res, next) => {
    console.log("Hope you enjoy your stay!");
  });
  
  app.use('/user/:id', (req, res, next) => {
    console.log("The weather is wonderful,");
    next();
  });
  
  app.get('/user/:id', (req, res, next) => {
    console.log("And the sun is shining!");
    next();
  });
  
  app.get('/user', (req, res, next) => {
    console.log("Well, goodbye!");
   next();
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });