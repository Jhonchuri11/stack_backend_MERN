/*

 MORGAN: una biblioteca de código abierto para registrar información sobre 
 el ciclo de solicitud-respuesta HTTP en una aplicación de servidor. 
 morgan()es una función que devolverá una función de middleware , para 
 reiterar: el valor de retorno de morgan()será una función, esa función 
 tendrá la firma de función (req, res, next)que se puede insertar en un 
 app.use(), y esa función se llamará antes de todo el middleware

*/