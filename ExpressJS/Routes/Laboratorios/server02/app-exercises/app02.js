/*
EXERCISE 2:

Escriba una ruta para manejar solicitudes PUT a /currencies/:name/countries.

El :name parámetro representa el nombre de la moneda 
en el currenciesobjeto. La matriz actualizada de países 
que utilizan esta moneda se enviará en una consulta.

Este controlador de ruta debe reemplazar la 
countriesmatriz del objeto de moneda única correcto con una matriz 
actualizada de la consulta. Debe enviar la matriz actualizada como respuesta.

*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const currencies = {
  diram: {
    countries: ['UAE', 'Morocco'],
  },
  real: {
    countries: ['Brazil'],
  },
  dinar: {
    countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
  },
  vatu: {
    countries: ['Vanuatu'],
  },
  shilling: {
    countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
  },
};

app.put('/currencies/:name/countries', (req, res, next) => {
  const currenciesUpdate = req.query;
  const nameCurrencies = req.params.name;
  currencies[nameCurrencies] = currenciesUpdate;
  res.send(currencies[nameCurrencies]);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

