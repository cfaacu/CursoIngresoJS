//Careri Facundo
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje=("Oeste.");
			break;
		case "Cataratas":
			mensaje=("Norte.");
			break;
		case "Mar del plata":
			mensaje=("Este");
			break;
		case "Ushuaia":
			mensaje=("Sur");
			break;
	}

	alert (mensaje);
}//FIN DE LA FUNCIÓN