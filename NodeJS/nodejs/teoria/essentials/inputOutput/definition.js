// ENTRADA Y SALIDA

/*
En su forma más abstracta, la salida es cualquier dato o retroalimentación
que proporciona una computadora (por ejemplo, a un usuario humano), mientras
que la entrada son los datos proporcionados a la computadora. Cuando usamos, 
console.log()le pedimos a la computadora que envíe información a la consola.
*/

/*
En Node, también podemos recibir entrada de un usuario a través de 
la terminal usando el stdin.on()método en el processobjeto:
*/

// EXAMPLE
process.stdin.on('data', (userInput) => {
    let input = userInput.toString()
    console.log(input)
});