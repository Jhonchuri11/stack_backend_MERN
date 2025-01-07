// DEFINITION 

/*
En el ejercicio anterior, leíamos datos de un flujo, 
pero también podemos escribir en flujos. Podemos crear un 
flujo que permita la escritura en un archivo mediante el fs.createWriteStream()método:

*/

// EXAMPLE

const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();