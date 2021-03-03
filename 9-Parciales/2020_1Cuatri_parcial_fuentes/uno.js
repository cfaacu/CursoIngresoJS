//Careri Facundo
function mostrar()
{
	var contador;
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var banderaAlcohol;
	var alcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var unidadesBarbijo;
	var unidadesJabon;
	var unidadesAlcohol;
	var mayorUnidades;
	var unidadesAlcohol;
	var unidadesJabon;
	var unidadesBarbijo;
	var masUnidades
	var promedio;

	banderaAlcohol="primero";
	contador=0;
	unidadesBarbijo=0;
	unidadesJabon=0;
	unidadesAlcohol=0;
	cantidadCompraBarbijo=0;
	cantidadCompraAlcohol=0;
	cantidadCompraJabon=0;

	while(contador<5)
	{
		contador=contador+1;

		tipoIngresado=prompt("Ingrese el #"+contador+" producto: ");
		while(isNaN(tipoIngresado)==false || tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("Producto invalido, intente nuevamente: ");
		}

		precioIngresado=prompt("Ingrese el precio: ");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Precio incorrecto, intente nuevamente: ");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese la cantidad: ");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<0 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Cantidad incorrecta, intente nuevamente: ");
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		marcaIngresada=prompt("Ingrese la marca: ");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Marca invalida, intente nuevamente: ");
		}

		fabricanteIngresado=prompt("Ingrese fabricante: ");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Fabricante invalido, intente nuevamente: ");
		}

		switch(tipoIngresado)
		{
			case "alcohol":			
				unidadesAlcohol=unidadesAlcohol+cantidadIngresada;
				cantidadCompraAlcohol=cantidadCompraAlcohol+1;
				if(banderaAlcohol=="primero")
				{
					alcoholBarato=precioIngresado;
					fabricanteAlcoholBarato=fabricanteIngresado;
					cantidadAlcoholBarato=cantidadIngresada;
					banderaAlcohol="segundo";
				}
				else
				{
					if(precioIngresado<alcoholBarato)
					{
						alcoholBarato=precioIngresado;
						fabricanteAlcoholBarato=fabricanteIngresado;
						cantidadAlcoholBarato=cantidadIngresada;
					}
				}
				break;
			case "jabon":
				unidadesJabon=unidadesJabon+cantidadIngresada;
				cantidadCompraJabon=cantidadCompraJabon+1;
				break;
			case "barbijo":
				unidadesBarbijo=unidadesBarbijo+cantidadIngresada;	
				cantidadCompraBarbijo=cantidadCompraBarbijo+1;		
		}


	}//Fin While toma datos

	if(unidadesAlcohol>unidadesBarbijo)
	{
		if(unidadesAlcohol>unidadesJabon)
		{
			mayorUnidad=unidadesAlcohol;
			promedio=unidadesAlcohol/cantidadCompraAlcohol;
			masUnidades="Alcohol";
		}
		else
		{
			mayorUnidad=unidadesJabon;
			promedio=unidadesJabon/cantidadCompraJabon;
			masUnidades="Jabon";
		}
	} 
	else
	{
		mayorUnidad=unidadesBarbijo;
		promedio=unidadesBarbijo/cantidadCompraBarbijo;
		masUnidades="Barbijo";
	}

	alert("Del alcohol mas barato hay : "+cantidadAlcoholBarato+ " unidades, y el fabricante es: "+fabricanteAlcoholBarato);
	alert("El tipo con mas unidades es: "+masUnidades+" y el promedio de compra es: "+promedio);
	alert("De jabon hay: "+unidadesJabon+" unidades.");



}//Fin funcion
