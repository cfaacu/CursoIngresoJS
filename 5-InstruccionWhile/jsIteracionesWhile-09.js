//Careri Facundo
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaPar;
	var banderaNegativo;
	var numeroIngresado;
	var numeroMaximo; 
	var numeroMinimo;
	var respuesta;
	var numeroPar;
	//iniciar variables
	banderaPar="es el primero";
	banderaNegativo="primero";
	
	
	for(respuesta="si";respuesta=="si";respuesta=prompt("desea continuar?"))
	{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Numero Incorrecto, intente nuevamente: ");
			numeroIngresado=parseInt(numeroIngresado);
		}
		

		if(numeroIngresado%2==0)
		{
			if(banderaPar=="es el primero")
			{
				numeroMinimo=numeroIngresado;
				banderaPar="no es el primero";
			}
			else
			{
				if(numeroIngresado<numeroMinimo)
				{
					numeroMinimo=numeroIngresado;
				}
			}
		}

		if(numeroIngresado<0)
		{
			if(banderaNegativo=="primero")
			{
				numeroMaximo=numeroIngresado;
				banderaNegativo="no";
			}
			else
			{
				if(numeroIngresado<numeroMaximo)
				{
					numeroMaximo=numeroIngresado;
				}
			}
		}

		
		


	}
	
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN