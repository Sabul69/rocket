Prueba Rocket- Saul Antonio Hernandez Balderrama

Entrego documento en word con las preguntas tecnicas realizadas. 
Y una carpeta con el proyecto fullstack, tiene dos carpetas dentro una con el 
front-end desarrollado en react y el otro con el back-end desarrollado con node.

El front-end lo desarrolle mobile first, no aplique responsive, pero por la utilizacion 
de porcentajes y rem no se deforma ni pierde el sentido en la version de escritorio.
Se presentaran formularios para ser llenados con datos personales y conforme se vayan 
llenando se ira desplegando más preguntas, hasta que salga un boton qye es el que mandara 
la peticion post al back-end para crear un registro.

El back-end es con express, en este solo se cuenta con una ruta con el metodo post, para 
la creacion de un registro con la informacion que fue mandada por el front-end, tambien
se aplicaron validaciones de los datos recibidos mediante express validator, en los cuales 
se valida el tipo de dato, que no este vacio, que sea tipo e-mail y de no ser asi no se crea 
el registro y se manda un mensaje al front de vuelta con el error correspondiente.