/*
El código que realiza la misma tarea en varios lugares es repetitivo, y el
lema del codificador de calidad es “No te repitas” (DRY, por sus siglas 
en inglés). Si un programa realiza tareas similares sin refactorizarse en 
una función, se dice que “viola DRY”. “Violar DRY” es la forma de quejarse 
de un programador: “¡Este script está diciendo lo mismo una y otra vez! 
¡Podemos hacer lo mismo con menos código!”. Tratemos de no repetirnos en 
esta base de código reutilizando parte del código que se repite de manera
 más evidente en funciones que podamos llamar en su lugar.
*/

/*
El MIDDLEWARE:

es un código que se ejecuta entre un servidor que recibe una solicitud
 y envía una respuesta. Opera en el límite, por así decirlo, entre esas dos acciones HTTP.

*/

/*

En Express, el middleware es una función. El middleware puede 
ejecutar lógica en la solicitud y la respuesta.
Vista previa: Descripción del enlace de carga de documentos
objetos
, como: inspeccionar una solicitud, ejecutar cierta lógica en 
función de la solicitud, adjuntar información a la respuesta, 
adjuntar un estado a la respuesta, enviar la respuesta de vuelta 
al usuario o simplemente pasar la solicitud y la respuesta a otro 
middleware. El middleware puede hacer cualquier combinación de esas
cosas o cualquier otra cosa que pueda hacer una función de Javascript.

*/