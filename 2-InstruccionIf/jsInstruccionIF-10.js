//Careri Facundo
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	var mensaje;

	numeroAleatorio=Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

	if(numeroAleatorio<4)
	{
		mensaje=("La nota es: "+numeroAleatorio+" Vamos, la proxima se puede");
	}
	else
	{
		if(numeroAleatorio>8)
		{
			mensaje=("La nota es: "+numeroAleatorio+" EXCELENTE");
		}
		else
		{
			mensaje=("La nota es: "+numeroAleatorio+" APROBO");
		}
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN