//Careri Facundo
function mostrar()
{
	var perimetro;
	var ancho;
	var largo;

	ancho=prompt("Ingrese el ancho del rectangulo: ");
	ancho=parseInt(ancho);
	while(isNaN(ancho)==true || ancho<0)
	{
		ancho=prompt("Incorrecto, ingrese el ancho nuevamente: ");
		ancho=parseInt(ancho);
	}

	largo=prompt("Ingrese el largo del rectangulo: ");
	largo=parseInt(largo);
	while(isNaN(largo)==true || largo<0)
	{
		largo=prompt("Incorrecto, ingrese el largo nuevamente: ");
		largo=parseInt(largo);
	}

	perimetro=ancho+largo;

	alert("El perimetro del rectango es: "+perimetro);
}
