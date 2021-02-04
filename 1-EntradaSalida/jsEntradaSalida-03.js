/*
Careri Facundo
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;

	nombreIngresado=document.getElementById("txtIdNombre").value //Tomar
	alert("El nombre es: " + nombreIngresado);

}


