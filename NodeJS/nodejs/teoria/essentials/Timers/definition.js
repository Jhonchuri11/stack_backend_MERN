// DEFINITION 
/* La setImmediate()función

La setImmediate()función ejecuta la función de devolución de 
llamada especificada después de que se haya completado el bucle
de eventos actual. La función acepta una función de devolución 
de llamada como su primer argumento y, opcionalmente, acepta 
argumentos para la función de devolución de llamada como argumentos subsiguientes.
*/

// EXAMPLE

setImmediate(() => {
    console.log('End of this event loop!');
})