//Careri Facundo
function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje=("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			mensaje=("Abrigate que hace frio.");
			break;
		default:
			mensaje=("Ya pasamos el frio, ahora calor!!!.");
	}

	alert (mensaje);
}//FIN DE LA FUNCIÓN