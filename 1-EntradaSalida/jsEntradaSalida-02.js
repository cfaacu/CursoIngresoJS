//Careri Facundo

/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes*/


function mostrar()
{
	var paisIngresados;
	var continenteIngresado;
	var habitantesIngresados;
	var pobresaIngresada;
	var temperaturaIngresada;
	var contador;
	var temperaturasPares;
	var temperaturasInparesEuropa;
	var habitantesMenores;
	var paisMenosHabitantes;
	var paisesMayor40G;
	var paisesAmericaMenos0G;
	var habitantesTotales;
	var promedioHabitantes;
	var promedioHabitantesPaisesMayor40g;
	var temperaturaMinima;
	var paisTemperaturaMinima;
	var habitantesAmerica;
	var habitantesAsia;
	var habitantesEuropa;
	var habitantesAfrica;
	var habitantesOceania;
	var mayorHabitantes;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var mensajeF;
	
	

	temperaturasPares=0;
	temperaturasInparesEuropa=0;
	paisesMayor40G=0;
	paisesAmericaMenos0G=0;
	habitantesTotales=0;
	habitantesAsia=0;
	habitantesEuropa=0;
	habitantesAfrica=0;
	habitantesOceania=0;
	habitantesAmerica=0;

	
	

	for(contador=0;contador<5;contador++)
	{
		paisIngresados=prompt("Ingrese el pais: ");
		while(isNaN(paisIngresados)==false)
		{
			paisIngresados=prompt("Pais invalido, intente nuevamente: ");
		}

		continenteIngresado=prompt("Ingrese el continente: ");
		while(isNaN(continenteIngresado)==false || continenteIngresado!="america" && continenteIngresado!="asia" && continenteIngresado!="europa" && continenteIngresado!="africa" && continenteIngresado!="oceania")
		{
			continenteIngresado=prompt("Continente invalido, intente nuevamente: ");
		}

		habitantesIngresados=prompt("Ingrese la cantidad de habitantes entre 1 y 700 millones: ");
		habitantesIngresados=parseInt(habitantesIngresados);
		while(isNaN(habitantesIngresados)==true || habitantesIngresados<1 || habitantesIngresados>700)
		{
			habitantesIngresados=prompt("Cantidad incorrecta, intente nuevamente: ");
			habitantesIngresados=parseInt(habitantesIngresados);
		}		
		
		if(continenteIngresado=="europa")
		{
			pobresaIngresada=prompt("Ingrese la pobresa: rico o muy rico: ");
			while(isNaN(pobresaIngresada)==false || pobresaIngresada!="rico" && pobresaIngresada!="muy rico")
			{
				pobresaIngresada=prompt("Pobresa Invalida, intente nuevamente: ");
			}
		}
		else
		{
			pobresaIngresada=prompt("Ingrese la pobresa pobre, rico o muy rico: ");
			while(isNaN(pobresaIngresada)==false || pobresaIngresada!="pobre" && pobresaIngresada!="rico" && pobresaIngresada!="muy rico")
			{
				pobresaIngresada=prompt("Pobresa invalida, intente nuevamente: ");
			}
		}
		
		temperaturaIngresada=prompt("Ingrese la temperatura del territorio, entre -50 y 50: ");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<-50 || temperaturaIngresada>50)
		{
			temperaturaIngresada=prompt("Temperatura incorrecta, intente nuevamente: ");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}

		if(temperaturaIngresada%2==0)
		{
			temperaturasPares=temperaturasPares+1;
		}
		else
		{
			if(continenteIngresado=="europa")
			{
				temperaturasInparesEuropa=temperaturasInparesEuropa+1;
			}
		}
		
		if(contador==0)
		{
			paisMenosHabitantes=paisIngresados;
			habitantesMenores=habitantesIngresados;
		}
		else
		{
			if(habitantesIngresados<habitantesMenores)
			{
				paisMenosHabitantes=paisIngresados;
				habitantesMenores=habitantesIngresados;
			}
		}

		
		if(temperaturaIngresada>40)
		{
			paisesMayor40G=paisesMayor40G+1;
		}
		

		if(continenteIngresado=="america")
		{
			if(temperaturaIngresada<0)
			{
				paisesAmericaMenos0G=paisesAmericaMenos0G+1;
			}
		}

		if(contador==0)
		{
			temperaturaMinima=temperaturaIngresada
			paisTemperaturaMinima=paisIngresados;
		}
		else
		{
			if(temperaturaIngresada<temperaturaMinima)
			{
				temperaturaMinima=temperaturaIngresada
				paisTemperaturaMinima=paisIngresados;
			}
		}

		switch(continenteIngresado)
		{
			case "america":
				habitantesAmerica=habitantesAmerica+habitantesIngresados;
				break;
			case "asia":
				habitantesAsia=habitantesAsia+habitantesIngresados;
				break;
			case "europa":
				habitantesEuropa=habitantesEuropa+habitantesIngresados;
				break;
			case "africa":
				habitantesAfrica=habitantesAfrica+habitantesIngresados;
				break;
			case "oceania":
				habitantesOceania=habitantesOceania+habitantesIngresados;
		}

		habitantesTotales=habitantesTotales+habitantesIngresados;

	}//Fin del for


	promedioHabitantes=habitantesTotales/contador;
	promedioHabitantesPaisesMayor40g=paisesMayor40G/cantidad;

	if(habitantesAmerica>habitantesAsia)
	{
		if(habitantesAmerica>habitantesAfrica)
		{
			if(habitantesAmerica>habitantesEuropa)
			{
				if(habitantesAmerica>habitantesOceania)
				{
					mayorHabitantes="america";
				}
				else
				{
					mayorHabitantes="oceania";
				}
			}
			else
			{
				if(habitantesEuropa>habitantesOceania)
				{
					mayorHabitantes="europa";
				}
			}
		}
		else
		{
			if(habitantesAfrica>habitantesEuropa)
			{
				if(habitantesAfrica>habitantesOceania)
				{
					mayorHabitantes="africa";
				}
			}
		}
	}
	else
	{
		if(habitantesAsia>habitantesAfrica)
		{
			if(habitantesAsia>habitantesEuropa)
			{
				if(habitantesAsia>habitantesOceania)
				{
					mayorHabitantes="asia";
				}
			}
		}
	}

	mensajeA="La cantidad de temperaturas pares son: "+temperaturasPares+" y la cantidad de impares de europa son: "+temperaturasInparesEuropa;
	mensajeB="El nombre del pais con menos habitantes es: "+paisMenosHabitantes;
	mensajeC="La cantidad de paises que superan los 40 grados: "+paisesMayor40G+" y la cantidad de paises de america con menos de 0 grados son: "+paisesAmericaMenos0G;
	mensajeD="El promedio de habitantes es: "+promedioHabitantes+" y el promedio entre los paises con mas de 40grados es: "+promedioHabitantesPaisesMayor40g;
	mensajeE="La temperatura minima ingresada es: "+temperaturaMinima+" y el nombre del pais que registro esa temperatura es: "+paisTemperaturaMinima;
	mensajeF="El pais con mas habitantes es: "+mayorHabitantes;




}//Final funcion principal