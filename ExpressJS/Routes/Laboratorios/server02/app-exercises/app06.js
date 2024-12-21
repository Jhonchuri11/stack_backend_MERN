/*
EXERCISE 6: ENRUTADORES DOS

Cree dos enrutadores - mountainsRoutery mountainRangesRouter. 
Móntelos en /mountainsy /mountain-ranges, respectivamente.

Cree un controlador de ruta mountainsRouterpara enviar de vuelta
 la mountainsmatriz en respuesta a una solicitud GET /mountains.

Cree un controlador de ruta con mountainRangesRouter para enviar
 de vuelta la mountainRangesmatriz en respuesta a una solicitud GET /mountain-ranges.

*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;


const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];

// create enruters
const mountainsRouter = express.Router();
const mountainRangesRouter = express.Router();

app.use('/mountains', mountainsRouter);
app.use('/mountain-ranges', mountainRangesRouter);

mountainsRouter.get('/', (req, res, next) => {
  res.send(mountains);
})

mountainRangesRouter.get('/', (req, res, next) => {
  res.send(mountainRanges);
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
