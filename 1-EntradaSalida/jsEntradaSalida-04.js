/* 
Careri Facundo
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensajeDeRespuesta;

	nombre= prompt("ingrese nombre");

	mensajeDeRespuesta="su nombre es : "+nombre;

	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//mostrando


}
/*
salida 
	alert()
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//muestra el valor

ingreso
	=prompt()
	nombreIngresado=document.getElementById('txtIdNombre').value;// toma el valor 


*/

