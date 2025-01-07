/* module.exports 
- Para crear un módulo, simplemente hay que crear un nuevo archivo 
donde se puedan declarar las funciones. Luego, para que estas funciones 
estén disponibles en otros archivos, hay que añadirlas como propiedades 
al objeto integrado module.exports:
*/

/* converters.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
  
  module.exports.fahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  };