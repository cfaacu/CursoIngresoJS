//Careri Facundo
function mostrar()
{
	var repeticiones;
	var contador;
	var numerosPares;

	numerosPares=0;

	repeticiones=prompt("Ingrese un numero: ");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true)
	{
		repeticiones=prompt("Error, ingrese un numero: ");	
	}

	for(contador=0;contador<repeticiones;contador++)
	{
		if(contador%2==0)
		{	
			numerosPares=numerosPares+1;

			console.log(contador);
		}


	}

	console.log("La cantidad de numeros Pares es: "+numerosPares);

}//FIN DE LA FUNCIÓN