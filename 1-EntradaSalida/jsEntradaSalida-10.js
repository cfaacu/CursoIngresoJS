/*
Careri Facundo
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;
	var porcentaje;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt (importe);

	porcentaje = prompt("Ingrese el porcentaje: ","0");
	porcentaje = parseInt (porcentaje);

	descuento = (importe * porcentaje) / 100;

	resultado = importe - descuento;

	document.getElementById('txtIdResultado').value = resultado;
}
