/*
Careri Facundo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno
	//txtIdNumeroDos
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = parseInt (document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	resultado = numeroUno + numeroDos;

	alert ("La suma da: " + resultado);
}

//alert("la suma es : "+(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value)));