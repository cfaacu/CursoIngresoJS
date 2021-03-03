//Careri Facundo
function mostrar()
{
	var repeticiones;
	var contador;

	repeticiones=prompt("Ingrese la cantidad de repeticiones: ");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true)
	{
		repeticiones=prompt("Ingrese la cantidad de repeticiones: ");	
	}

	for(contador=0;contador<repeticiones;contador++)
	{
		if(contador==9)
		{
			break;
		}

		console.log(contador);
	}


}//FIN DE LA FUNCIÓN