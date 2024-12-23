// EXPRESIONES DE FLECHA

/*

Las expresiones de flecha han permitido a los desarrolladores omitir 
partes de la función que no necesitan. Esto significa que permite que
su código sea más fácil de mantener y organizado.

*/

// Defining an anonymous arrow expression that simply logs a string to the console.
console.log(() => console.log('Shhh, Im anonymous'));

// Defining a named function by creating an arrow expression and saving it to a const variable helloWorld. 
const helloWorld = (name) => {
  console.log(`Welcome ${name} to Codecademy, this is an arrow expression.`)
};

// Calling the helloWorld() function.
helloWorld('Codey'); 

// <--------- PROMESAS   ------->

/*

Una promesa es un objeto de JavaScript que representa el resultado 
final de una operación asincrónica. Una promesa Promisetiene tres 
resultados diferentes: pendiente (el resultado no está definido y 
la expresión está esperando un resultado), cumplida (la promesa se 
completó correctamente y devolvió un valor) y rechazada (la promesa 
no se completó correctamente, el resultado es un objeto de error).

*/

const testLuck = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) { 
    resolve('Lucky winner!')
  } else {
    reject(new Error('Unlucky!'))
  }
});

testLuck.then(message => {
  console.log(message) // Log the resolved value of the Promise
}).catch(error => {
  console.error(error) // Log the rejected error of the Promise
});


// <--------- Async / Await    ------->

/*

La async...awaitsintaxis permite a los desarrolladores implementar 
fácilmente Promisecódigo basado en . La palabra clave asyncutilizada 
junto con una declaración de función crea una función asincrónica que
devuelve un Promise. Las funciones asincrónicas nos permiten usar 
la palabra clave awaitpara bloquear el bucle de eventos hasta que 
se Promiseresuelva o rechace un . La awaitpalabra clave también nos 
permite asignar el valor resuelto de a Promisea una variable.

*/

// Creating a new promise that runs the function in the setTimeout after 5 seconds. 
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("All done!"), 5000);
});

// Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction. 
const asyncFunction = async () => {
  // Awaiting the promise to resolve and saving the result to the variable finalResult.
  const finalResult = await newPromise;
    
  // Logging the result of the promise to the console
  console.log(finalResult); // Output: All done!
}

asyncFunction();

// <--------- setInterval() and setTimeout()    ------->

/*

La setInterval()función ejecuta un bloque de código en un intervalo
especificado, en milisegundos. La setInterval()función requiere dos
argumentos: el nombre de la función (el bloque de código que se 
ejecutará) y la cantidad de milisegundos (con qué frecuencia se ejecutará la función).

*/

// Defining a function that instantiates setInterval
const showAlert = () => {
  // Calling setInterval() and passing a function that shows an alert every 5 seconds.
  setInterval(() => {
    alert('I show every 5 seconds!')
  }, 5000);
};

// Calling the newInterval() function that calls the setInterval
showAlert();


// <--------- setTimeout()    ------->

/*

La setTimeout()función ejecuta un bloque de código después de una cantidad de
tiempo especificada (en milisegundos) y solo se ejecuta una vez.
La setTimeout()función acepta los mismos argumentos que la setInterval()función. 
El uso de la clearTimeout()función evitará que se ejecute la función especificada. 

*/

// Defining a function that calls setTimeout
const showTimeout = () => {
  // Calling setTimeout() that passes a function that shows an alert after 5 seconds.
  setTimeout(() => {
    alert('I only show once after 5 seconds!');
  }, 5000);
};

// Calling the showTimeout() function
showTimeout();