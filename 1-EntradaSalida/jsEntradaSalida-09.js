/*
Careri Facundo
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Pedir Porcentaje*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
	var porcentaje;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt (sueldo);

	porcentaje = prompt("Ingrese el porcentaje: ","0");
	porcentaje = parseInt (porcentaje);

	aumento = (sueldo * porcentaje) / 100;
	
	resultado = sueldo + aumento;

	document.getElementById('txtIdResultado').value = resultado;


}
