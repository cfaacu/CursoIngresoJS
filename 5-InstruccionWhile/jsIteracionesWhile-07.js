//Careri Facundo
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese numero : #"+contador);
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=numeroIngresado+acumulador;
		respuesta=prompt("Ingrese si para continuar.");

	}
	
	promedio=acumulador/contador;
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}//FIN DE LA FUNCIÓN