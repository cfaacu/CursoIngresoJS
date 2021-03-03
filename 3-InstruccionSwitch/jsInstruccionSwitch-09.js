//Careri Facundo
function mostrar()
{
	var estacionIngresada;
	var destino;
	var precio;
	var resultado;
	var total;

	precio=15000;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					resultado=(precio*20)/100;
					total=resultado+precio;
					mensaje=("El precio total es: "+total);
					break;
				case "Mar del plata":
					resultado=(precio*20)/100;
					total=precio-resultado;
					mensaje=("El precio total es: "+total);
					break;
				default:
					resultado=(precio*10)/100;
					total=precio-resultado;
					mensaje=("El precio total es: "+total);
					break;					
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					resultado=(precio*20)/100;
					total=precio-resultado;
					mensaje=("El precio total es: "+total);
					break;
				case "Mar del plata":
					resultado=(precio*20)/100;
					total=resultado+precio;
					mensaje=("El precio total es: "+total);
					break;
				default:
					resultado=(precio*10)/100;
					total=resultado+precio;
					mensaje=("El precio total es: "+total);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Cordoba":
					mensaje=("El precio total es: "+precio);
					break;
				default:
					resultado=(precio*10)/100;
					total=resultado+precio;
					mensaje=("El precio total es: "+total);
					break;
			}
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN