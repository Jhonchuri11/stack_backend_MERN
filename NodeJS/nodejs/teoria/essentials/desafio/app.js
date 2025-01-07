/*
Como desafío opcional, en app.js , use los módulos 
buffery timerpara crear dos buffers, unirlos, convertirlos 
en una cadena y registrar el resultado en la consola después de 3 segundos.
*/

// POSIBLE 
setTimeout(() => {
    const buffer1 = Buffer.from('Hello');
    const buffer2 = Buffer.from('learner');
    const bufferArray = [buffer1, buffer2];
    const bufferConcat = Buffer.concat(bufferArray);
  
    console.log(bufferConcat.toString());
}, 3000);