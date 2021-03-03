//Careri Facundo
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var positivos;
	var negativos;
	var respuesta;
	var multiplicacion;
	var numeroIngresado;
	var banderaNegativo;


	contador=0;
	positivos=0;
	negativos=1;
	respuesta='si';
	banderaNegativo=0;

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese numero : #"+contador);
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>-1)
		{
			positivos=numeroIngresado+positivos;
		}
		else
		{
			banderaNegativo=1;
			negativos=negativos*numeroIngresado;
		}
		
		respuesta=prompt("Ingrese si para continuar.");

	}

	if(banderaNegativo==0)
	{
		multiplicacion=0;
	}
	
	
	document.getElementById('txtIdSuma').value=positivos;

	document.getElementById('txtIdProducto').value=negativos;
}//FIN DE LA FUNCIÓN