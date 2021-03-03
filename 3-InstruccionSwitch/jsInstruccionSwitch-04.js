//Careri Facundo
function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño=document.getElementById('txtIdMes').value;
	
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje=("Si tiene 30 días");
			break;
		case "Febrero":
			mensaje=("Si tiene 28 días");
			break;
		default:
			mensaje=("Si tiene 31 días");
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN