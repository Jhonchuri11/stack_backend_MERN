// MODULE UTIL

/*

Las funciones de utilidad no necesariamente crean nuevas
funciones en un programa, pero puedes pensar en ellas como 
herramientas internas que se utilizan para mantener y depurar 
tu código. El utilmódulo principal de Node.js contiene
Vista previa: Descripción del enlace de carga de documentos
métodos

Diseñado específicamente para estos fines. El utilmódulo se puede 
incluir en el archivo mediante:

*/

// EXAMPLE REQUIRE

const util = require('util');

const today = new Date();
const earthDay = 'April 22, 2022';

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));