/*

EXERCISE 1:

Actualmente, este servidor envía la misma respuesta para 
/whatis/apple, /whatis/orangey /whatis/banana. 
Escriba una función para enviar la misma respuesta y 
DRY el código utilizando esa función como devolución de 
llamada para las tres rutas.

EXERCISE 2:

moodlewareLa función de middleware actual debería adjuntar 
una moodpropiedad al objeto de solicitud en cada solicitud y 
luego continuar con el resto de la coincidencia de rutas. 
¡Falta algo! Arréglenlo para que continúe después de adjuntar 
el req.mood.

EXERCISE 3:

Complete la timeMiddlewarefunción para secar la aplicación actual
adjuntando el currentTimeal cuerpo de la solicitud como date. Use 
esto en todas las rutas y elimine el código duplicado.

EXERCISE 5:

Importe el morganmiddleware de registro para registrar todas las
solicitudes. Utilice el formato predefinido "short" en lugar de "tiny"

EXERCISE 6:

Utilice app.use y la indexExistsfunción de middleware para 
todas /data/:indexlas rutas.

EXERCISE 7:

Utilice los recursos de middleware Express para encontrar un 
paquete de middleware apropiado para manejar solicitudes CORS .

Importa el paquete de middleware correcto y úsalo para todas 
las solicitudes. Puedes usar la configuración predeterminada 
para este middleware, ¡no es necesario personalizarlo!

EXERCISE 8:

La API actual tiene datos públicos a los que cualquier persona
debería tener acceso y datos privados a los que solo deberían 
acceder los usuarios administradores. Actualmente, los usuarios 
pueden acceder a cualquier dato, pero la isAdminfunción de 
middleware debería poder ayudar. Utilice esta función en 
cualquier ruta que acceda al secretDataobjeto.

EXERCISE 9:

Utilice Router.param para DRY this appleRouter. Adjunte la manzana 
varietyal cuerpo de la solicitud si existe, envíe una respuesta 404 
si no existe. En cada ruta individual, envíe la propiedad apropiada 
de ese objeto de manzana.

*/
