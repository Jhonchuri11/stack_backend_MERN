// Usar la desestructuración de objetos para ser más selectivorequire()
/*
- La require()función acepta una cadena como argumento. 
Esa cadena proporciona la ruta del archivo del módulo que desea importar.

- En muchos casos, los módulos exportarán una gran cantidad de funciones, 
pero solo se necesitarán una o dos de ellas. Puede utilizar la desestructuración 
de objetos para extraer solo las funciones necesarias.
*/

/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);