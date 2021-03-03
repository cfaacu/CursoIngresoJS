//Careri Facundo
function mostrar()
{
	var marcaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var respuesta;
	var par;
	var contador;
	var pesoMaximo;
	var marcaMaximo;
	var temperaturaCero;
	var pesoMinimo;
	var promedioPeso;
	var sumaPeso;
	var banderaPrimero;


	respuesta="si";
	banderaPrimero="primero";
	contador=0;
	par=0;
	pesoMaximo=0;
	pesoMinimo=0;
	marcaMaximo=0;
	temperaturaCero=0;
	sumaPeso=0;


	while(respuesta=="si")
	{
		marcaIngresada=prompt("Ingrese la marca del producto: ");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Incorrecto, ingrese la marca nuevamente: ");
		}
		
		pesoIngresado=prompt("Ingrese el peso: ");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado)==true || pesoIngresado>100 || pesoIngresado<1)
		{
			pesoIngresado=prompt("Peso incorrecto, intente nuevamente: ");
			pesoIngresado=parseInt(pesoIngresado);
		}

		temperaturaIngresada=prompt("Ingrese la temperatura de almacenamiento: ");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada>30 || temperaturaIngresada<-30)
		{
			temperaturaIngresada=prompt("Temperatura incorrecta, intente nuevamente: ");
			temperaturaIngresada=parseInt(temperaturaIngresada);			
		}

		if(temperaturaIngresada%2==0)
		{
			par=par+1;
		}

		sumaPeso=pesoIngresado+sumaPeso;

		while(banderaPrimero=="primero")
		{
			pesoMaximo=pesoIngresado;
			pesoMinimo=pesoIngresado;
			marcaMaximo=marcaIngresada;
			banderaPrimero="segundo";
		}

		if(pesoIngresado>pesoMaximo)
		{
			pesoMaximo=pesoIngresado;
			marcaMaximo=marcaIngresada;
		}
		if(pesoIngresado<pesoMinimo)
		{
			pesoMinimo=pesoIngresado;
		}

		if(temperaturaIngresada<0)
		{
			temperaturaCero=temperaturaCero+1;
		}

		contador=contador+1;


		respuesta=prompt("Ingrese si para continuar.");
	}//Fin del while principal

	promedioPeso=sumaPeso/contador;

	document.write("La cantidad de temperaturas pares son: "+par+"<br>La marca del producto mas pesada es: "+marcaMaximo+"<br>La cantidad de productos que se conservan a menos de 0 grados son: "+temperaturaCero+"<br>El promedio del peso de los productos es: "+promedioPeso+"<br>El peso maximo es: "+pesoMaximo+"<br>El peso minimo es: "+pesoMinimo);

}//Fin de la funcion.
