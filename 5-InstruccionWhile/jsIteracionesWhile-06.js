//Careri Facundo
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese numero : #"+contador);
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=numeroIngresado+acumulador;

	}
	
	promedio=acumulador/contador;
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}//FIN DE LA FUNCIÓN