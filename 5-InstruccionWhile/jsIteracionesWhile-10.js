//Careri Facundo
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var numeroCero;
	var numeroPar
	var promedioPositivo;
	var promedioNegativos;
	var diferencia;

	cantidadNegativos=0;
	cantidadPositivos=0;
	numeroCero=0;
	sumaNegativos=0;
	sumaPositivos=0;
	numeroPar=0;
	respuesta="si";

	while(respuesta=="si")
	{
		
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Numero Incorrecto, intente nuevamente: ");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado>0)
		{
			sumaPositivos=numeroIngresado+sumaPositivos;
			cantidadPositivos=cantidadPositivos+1;
			promedioPositivo=sumaPositivos/cantidadPositivos;
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos=numeroIngresado+sumaNegativos;
				cantidadNegativos=cantidadNegativos+1;
				promedioNegativos=sumaNegativos/cantidadNegativos;

			}
			else
			{
				numeroCero=numeroCero+1;
			}	
			
		}

		if(numeroIngresado%2==0)
		{
			numeroPar=numeroPar+1;
		}

		respuesta=prompt("Ingrese si para continuar: ");


	}//fin del while

	diferencia=sumaPositivos-sumaNegativos;

	document.write("la suma de negativos es : <br>"+sumaNegativos+"<br>La suma de los positivos es : <br>"+sumaPositivos+"<br>Cantidad de numeros negativos: <br>"+cantidadNegativos+"<br>Cantidad de numeros positivos: <br>"+cantidadPositivos+"<br>Cantidad de ceros: <br>"+numeroCero+"<br>Numeros Pares: <br>"+numeroPar+"<br>El promedio de positivos es: <br>"+promedioPositivo+"<br>El promedio de negativos es: <br>"+promedioNegativos+"<br>La diferencia entre positivos y negativos es: <br>"+diferencia);

	}//FIN DE LA FUNCIÓN