//Careri Facundo
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseInt (precioUno);

	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos = parseInt (precioDos);

	precioTres = document.getElementById('txtIdPrecioTres').value;
	precioTres = parseInt (precioTres);

	resultado = precioUno + precioDos + precioTres;

	alert ("La suma de los tres precios es: " + resultado);


}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseInt (precioUno);

	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos = parseInt (precioDos);

	precioTres = document.getElementById('txtIdPrecioTres').value;
	precioTres = parseInt (precioTres);

	resultado = (precioUno + precioDos + precioTres) / 3;

	alert ("El promedio de los tres precios es: " + resultado);	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseInt (precioUno);

	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos = parseInt (precioDos);

	precioTres = document.getElementById('txtIdPrecioTres').value;
	precioTres = parseInt (precioTres);

	resultado = (precioUno + precioDos + precioTres) * 1.21;

	alert ("El precio final es: " + resultado);


}