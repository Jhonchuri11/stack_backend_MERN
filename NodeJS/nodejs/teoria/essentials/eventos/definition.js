// DEFINITION EVENT
/*
Por ejemplo, al programar un sitio web, podríamos proporcionar una 
funcionalidad para un evento de clic sin saber cuándo lo activará un 
usuario. Cuando se creó Node, se aplicó este mismo concepto de principios
impulsados ​​por eventos al entorno back-end.

Node proporciona una EventEmitterclase a la que podemos acceder mediante 
un requerimiento en el events

Módulo principal:
*/

// EXAMPLE
// Require in the 'events' core module
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// creado variable // add new instance
let myEmitter = new events.EventEmitter();

/*
El .on()método toma como primer argumento el nombre del evento 
como una cadena y, como segundo argumento, la función de devolución de
llamada de escucha.
*/
myEmitter.on('celebration', listenerCallback);

/*
Cada instancia de emisor de eventos también tiene un .emit()método que 
anuncia que se ha producido un evento con nombre. El .emit()método toma 
como primer argumento el nombre del evento como cadena y, como segundo 
argumento, los datos que se deben pasar a la función de devolución de llamada del detector.
*/
// emitir evento
myEmitter.emit('celebration', 'new year 2025!')


// DIFRENT EXAMPLE

let newUserListener = (data) => {
    console.log(`We have a new user: ${data}.`);
  };
  
// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)
  
// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'
