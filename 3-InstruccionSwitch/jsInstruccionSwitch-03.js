//Careri Facundo
function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje=("Este mes no tiene mas de 29 días.");
			break;
		default:
			mensaje=("Este mes tiene 30 o mas días.");
			break;
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN