const express = require('express');
const app = express();

app.use(express.static('public'));

// import router expressionRouter
const expressionRouter = require('./expressions.js');
// import router animalsRouter
const animalsRouter = require('./animals.js');

const PORT = process.env.PORT || 4001;

// create route nivel base for expressions
app.use('/expressions', expressionRouter);
app.use('/animals', animalsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
});
