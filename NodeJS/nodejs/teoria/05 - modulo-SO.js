// MODULO OS

/*
La processpropiedad es un objeto que almacena y controla 
información sobre el entorno en el que se está ejecutando actualmente el proceso. 

EXAMPLE REQUIRE:

const os = require('os');

*/

// <------- METODOS DE OS ------>

/*

- os.type()— para devolver el sistema operativo de la computadora.
- os.arch()— para devolver la arquitectura de la CPU del sistema operativo.
- os.networkInterfaces()— para devolver información sobre las interfaces de 
red de la computadora, como la dirección IP y MAC.
- os.homedir()— para devolver el directorio de inicio del usuario actual.
 os.hostname()— para devolver el nombre de host del sistema operativo.
- os.uptime()— para devolver el tiempo de actividad del sistema, en segundos.


EXAMPLE - APLICATION:
*/
const os = require('os');
const local = {  
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Last Reboot': os.uptime()
}

