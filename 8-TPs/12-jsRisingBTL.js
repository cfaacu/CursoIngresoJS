//Careri Facundo
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldo;
 	var numeroLegajo;
 	var nacionalidad;

 	edadIngresada=prompt("Ingrese tu edad: ");
 	edadIngresada=parseInt(edadIngresada);
 	while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada=prompt("Numero incorrecto, ingrese nuevamente.");
 		edadIngresada=parseInt(edadIngresada);
 	}

 	sexoIngresado=prompt("Sexo: m=Masculino y f=Femenino.");
 	while(sexoIngresado!="f" && sexoIngresado!="m")
 	{
 		sexoIngresado=prompt("Sexo incorrecto, intente nuevamente.");
 	}

 	estadoCivilIngresado=prompt("Estado Civil: 1=Soltero, 2=Casado, 3=Divorciado y 4=Viudo. ");
 	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(isNaN(estadoCivilIngresado)==true || estadoCivilIngresado>4 || estadoCivilIngresado<1)
 	{
 		estadoCivilIngresado=prompt("Estado civil incorrecto, intente nuevamente");
 		estadoCivilIngresado=parseInt(estadoCivilIngresado);
 	}

 	sueldo=prompt("Ingrese sueldo bruto: ");
 	sueldo=parseInt(sueldo);
 	while(isNaN(sueldo)==true || sueldo<8000)
 	{
 		sueldo=prompt("Sueldo bruto incorrecto, intente nuevamente: ");
 		sueldo=parseInt(sueldo);
 	}

 	numeroLegajo=prompt("Ingrese tu numero de legajo: ");
 	numeroLegajo=parseInt(numeroLegajo);
 	while(isNaN(numeroLegajo)==true || numeroLegajo>9999 || numeroLegajo<1000)
 	{
 		numeroLegajo=prompt("Numero de legajo incorrecto, intente nuevamente: ");
 		numeroLegajo=parseInt(numeroLegajo);
 	}

 	nacionalidad=prompt("Nacionalidad: a=Argentinos, e=Exrtranjeros, n=Nacionalizados.");
 	while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n")
 	{
 		nacionalidad=prompt("Nacionalidad incorrecta, intente nuevamente: ");
 	}

 	switch(sexoIngresado)
 	{
 		case "f":
 			sexoIngresado="Femenino.";
 			break;
 		case "m":
 			sexoIngresado="Masculino.";

 			break;
 	}

 	switch(estadoCivilIngresado)
 	{
 		case 1:
 			estadoCivilIngresado="Soltero";
 			break;
 		case 2:
 			estadoCivilIngresado="Casado";
 			break;
 		case 3:
 			estadoCivilIngresado="Divorciado";
 			break;
 		case 4:
 			estadoCivilIngresado="Viudo";
 	}

 	switch(nacionalidad)
 	{
 		case "a":
 			nacionalidad="Argentino";
 			break;
 		case "e":
 			nacionalidad="Extranjero";
 			break;
 		case "n":
 			nacionalidad="Nacionalizado";
 			break;
 	}

 	document.getElementById('txtIdEdad').value=edadIngresada;
 	document.getElementById('txtIdSexo').value=sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado;
 	document.getElementById('txtIdSueldo').value=sueldo;
 	document.getElementById('txtIdLegajo').value=numeroLegajo;
 	document.getElementById('txtIdNacionalidad').value=nacionalidad;

}//fin funcion.
