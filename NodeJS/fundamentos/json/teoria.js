// <----- DEFINICION JSON --------->

/*

JSON, o JavaScript Object Notation, es un formato estándar popular e
independiente del lenguaje para almacenar e intercambiar datos. 
Adoptado por ECMA International , una asociación industrial fundada 
en 1961 para estandarizar los sistemas de información y comunicación, 
JSON se ha convertido en el estándar de facto que facilita el almacenamiento 
y el envío de datos entre todos los lenguajes de programación .

*/

// <----- USO COMÚN JSON --------->

/*
JSON se utiliza mucho para facilitar la transferencia de datos
en aplicaciones web entre un cliente, como un navegador web, y 
un servidor.

Algunas de las API web populares que utilizan JSON en intercambios de datos son:

<> Mapas de Google
- Autenticación de Google Auth 2.0
- API de gráficos sociales de Facebook
- API web de música de Spotify
- API de perfil de LinkedIn

*/

// <------ SINTAXIS JSON ------->

/*
{
    "student": {
      "name": "Rumaisa Mahoney",
      "age": 30,
      "fullTime": true,
      "languages": [ "JavaScript", "HTML", "CSS" ],
      "GPA": 3.9,
      "favoriteSubject": null
    }
}

Tenga en cuenta las siguientes reglas de sintaxis para JSON:

Las llaves, {..}, sostienen objetos.
Los corchetes, [..], contienen matrices.
Los datos se almacenan en pares de nombre-valor
separados por dos puntos :.

Cada par nombre-valor está separado de otro par 
por una coma. ,De manera similar, cada elemento de 
una matriz también está delimitado por una coma. Las 
comas finales están prohibidas.
Los nombres de propiedades JSON deben estar entre 
comillas dobles, (" ")incluso si los nombres de JavaScript no cumplen con esta rigurosidad.
*/

// <-------- TIPOS DE DATOS JSON -------->

/*
Un tipo de datos JSON debe ser uno de los siguientes:

- cadena (entre comillas dobles)
- número (entero o de punto flotante)
- objeto (par nombre-valor)
- matriz (delimitada por comas)
- booleano (verdadero o falso)
- nulo
*/

/*

Cabe destacar que JSON no cubre todos los tipos de datos. 
Los tipos que no están representados en JSON, como las fechas,
se pueden almacenar como una cadena y convertir a una estructura 
de datos específica del lenguaje. A continuación, se muestra un 
formato de fecha aceptado internacionalmente en ISO 8601 :

"2014-01-01T23:28:56.782Z"

*/