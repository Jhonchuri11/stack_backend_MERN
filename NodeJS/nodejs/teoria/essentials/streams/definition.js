// DEFINICION DE FLUJOS LEGIBLES : Streams

/*
Los flujos van de manera secuencial, pieza por pieza.

Los datos en flujo suelen ser preferibles, ya que no se necesita
suficiente RAM para procesar todos los datos a la vez ni es necesario 
tener todos los datos a mano para comenzar a procesarlos.


Para leer archivos línea por línea, podemos usar el .createInterface() 
método del readlinemódulo principal. .createInterface()devuelve una 
EventEmitterconfiguración para emitir 'line'eventos:

*/

// EXAMPLE

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});