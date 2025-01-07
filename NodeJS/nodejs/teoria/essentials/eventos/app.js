// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// creado variable // add new instance
let myEmitter = new events.EventEmitter();

myEmitter.on('celebration', listenerCallback);
// emitir evento
myEmitter.emit('celebration', 'new year 2025!');

