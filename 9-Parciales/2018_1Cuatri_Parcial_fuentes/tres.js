//Careri Facundo
function mostrar()
{
	var precioIngresado;
	var descuentoIngresado;
	var resultado;
	var total;

	precioIngresado=prompt("Ingrese el precio: ");
	precioIngresado=parseInt(precioIngresado);
	while(isNaN(precioIngresado)==true || precioIngresado<0)
	{
		precioIngresado=prompt("El precio es incorrecto, intente nuevamente: ");
		precioIngresado=parseInt(precioIngresado);
	}

	descuentoIngresado=prompt("Ingrese el descuento: ");
	descuentoIngresado=parseInt(descuentoIngresado);
	while(isNaN(descuentoIngresado)==true || descuentoIngresado<0)
	{
		descuentoIngresado=prompt("El descuento es incorrecto, intente nuevamente: ");
		descuentoIngresado=parseInt(descuentoIngresado);
	}

	resultado=(precioIngresado*descuentoIngresado)/100;
	total=precioIngresado-resultado;

	document.getElementById('elPrecioFinal').value=total;

}//Final funcion
