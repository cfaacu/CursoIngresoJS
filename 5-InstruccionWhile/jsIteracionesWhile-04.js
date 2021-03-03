//Careri Facundo
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado>9 || numeroIngresado<0)
	{
		numeroIngresado = prompt("El numero es invalido, intentelo nuevamente");
		numeroIngresado=parseInt(numeroIngresado);
	}


	
}//FIN DE LA FUNCIÓN

