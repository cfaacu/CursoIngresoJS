//Careri Facundo 
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	var respuesta;
	var temperaturaMayor;
	var nombreMayorTemperatura;
	var banderaPrimero;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var cantidadViudos;
	var cantidadSolteros;
	var cantidadCasados;
	var mayoresViudos;
	var hombresViudos;
	var terceraEdadMayor;
	var edadSolteros;
	var promedioSolteros;
	var hombresSolteros;

	respuesta="si";
	banderaPrimero="primero";
	temperaturaMayor=0;
	cantidadViudos=0;
	cantidadSolteros=0;
	cantidadCasados=0;
	mayoresViudos=0;
	hombresViudos=0;
	hombresSolteros=0;
	terceraEdadMayor=0;
	edadSolteros=0;

	while(respuesta=="si")
	{
		nombreIngresado=prompt("Ingrese el nombre: ");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Nombre incorrecto, intente nuevamente: ");
		}

		edadIngresada=prompt("Ingrese la edad: ");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true)
		{
			edadIngresada=prompt("Edad incorrecta, intente nuevamente: ");
			edadIngresada=parseInt(edadIngresada);
		}

		sexoIngresado=prompt("Ingrese el sexo m o f: ");
		while(sexoIngresado!="m" && sexoIngresado!="f")
		{
			sexoIngresado=prompt("Sexo incorrecto, intente nuevamente: ");
		}

		estadoCivilIngresado=prompt("Ingrese estado civil, soltero, viudo o casado: ");
		while(estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Estad civil incorrecto, intente nuevamente: ");
		}

		temperaturaIngresada=prompt("Ingrese la temperatura corporal: ");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true)
		{
			temperaturaIngresada=prompt("Temperatura incorrecta, intente nuevamente: ");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		if(banderaPrimero=="primero")
		{
			temperaturaMayor=temperaturaIngresada;
			nombreMayorTemperatura=nombreIngresado;
			banderaPrimero="segundo";
		}
		else
		{
			if(temperaturaIngresada>temperaturaMayor)
			{
				temperaturaMayor=temperaturaIngresada;
				nombreMayorTemperatura=nombreIngresado;
			}	
		}

		switch(estadoCivilIngresado)
		{
			case "soltero":
				cantidadSolteros=cantidadSolteros+1;
				edadSolteros=edadIngresada+edadSolteros;
				if(sexoIngresado=="m")
				{
					hombresSolteros=hombresSolteros+1;
				}
				break;
			case "casado":
				cantidadCasados=cantidadCasados+1;
				break;
			case "viudo":
				if(edadIngresada>17)
				{
					mayoresViudos=mayoresViudos+1;
				}				
				
				if(sexoIngresado=="m")
				{
					hombresViudos=hombresViudos+1;
				}
				break;
		}
		
		if(edadIngresada>60)
		{
			if(temperaturaIngresada>38)
			{
				terceraEdadMayor=terceraEdadMayor+1;
			}
		}


		respuesta=prompt("Ingrese si para continuar.");
	}//Fin switch toma datos

	promedioSolteros=edadSolteros/cantidadSolteros;


	mensajeA="El nombre de la persona con mas temperatura es: "+nombreMayorTemperatura;
	mensajeB="La cantidad de mayores de edad viudos es: "+mayoresViudos;
	mensajeC="La cantidad de hombre solteros es: "+hombresSolteros+" y la cantidad de viudos es:"+hombresViudos;
	mensajeD="La cantidad de personas de la tercera edad que tienen mas de 38 de temperatura es: "+terceraEdadMayor;
	mensajeE="El promedio de edad entre los hombres solteros es: "+promedioSolteros;

	alert(mensajeA);
	alert(mensajeB);
	alert(mensajeC);
	alert(mensajeD);
	alert(mensajeD);

}//Fin funcion
