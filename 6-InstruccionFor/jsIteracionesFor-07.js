//Careri Facundo
function mostrar()
{
	var numeros;
	var contador;
	var numerosDivisores;

	numerosDivisores=0;

	numeros=prompt("Ingrese un numero: ");
	numeros=parseInt(numeros);
	while(isNaN(numeros)==true)
	{
		numeros=prompt("Error, ingrese un numero: ");	
	}

	for(contador=0;contador<numeros;contador++)
	{
		if(numeros%contador==0)
		{	
			numerosDivisores=numerosDivisores+1;

			console.log(contador);
		}


	}

	console.log("La cantidad de numeros divisores es: "+numerosDivisores);

}//FIN DE LA FUNCIÓN
