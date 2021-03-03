//Careri Facundo
function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	/*
	if(edad>17)
	{
		alert("Usted NO es adolescente");
	}
	if(edad<12)
	{
		alert ("Usted NO es adolescente");
	}
	*/


	/*
	if(!(edad<18 && edad>12)) // ! negacion
	{
		alert("Usted NO es adolescente");
	}
	*/

	if (edad>17||edad<12)  //|| Entra los numeros entre uno y otro
	{
		alert("Usted NO es adolescente");
	}
}
