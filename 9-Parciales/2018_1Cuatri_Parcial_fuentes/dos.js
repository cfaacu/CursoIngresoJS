//Careri Facundo
function mostrar()
{
  var nombreIngresado;
  var localidadIngresada;

  nombreIngresado=document.getElementById('elNombre').value;
  while(isNaN(nombreIngresado)==false)
  {
  	nombreIngresado=prompt("El nombre ingresado es incorrecto, intente nuevamente: ");
  }

 localidadIngresada=document.getElementById('laLocalidad').value;
  while(isNaN(localidadIngresada)==false)
  {
  	localidadIngresada=prompt("La localidad es incorrecta, intente nuevamente: ");
  }

  alert("Usted es "+nombreIngresado+" y vive en la localidad "+localidadIngresada);

}//Fin funcion
