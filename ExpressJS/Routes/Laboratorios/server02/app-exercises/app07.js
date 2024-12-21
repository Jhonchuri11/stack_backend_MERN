const express = require('express');
const app = express();
const router = express.Router();

const sloths = ['slowpoke', 'fluffles', 'sonic'];

const PORT = process.env.PORT || 4001;

app.use('/animals', router);

let slothPath = '/sloths';

router.get(slothPath, (req, res, next) => {
  res.send(sloths);
});

app.listen(PORT);