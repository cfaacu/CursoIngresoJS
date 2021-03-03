//Careri Facundo 16:33 arranque 16:56 final 17:01 testeo
function mostrar()
{
	var productoIngresado;
	var cantidadIngresada;
	var precioIngresado;
	var respuesta;
	var precioTotal;
	var precioArena;
	var precioCal;
	var precioCemento;
	var cantidadTotal;
	var cantidadArena;
	var cantidadCemento;
	var cantidadCal;
	var descuento;
	var precioDescuento;
	var precioTotalDescuento;
	var masBolsas;
	var masCaro;
	var mensajeA;
	var mensajeC;
	var mensajeB;
	var precioTotalArena;
	var precioTotalCal;
	var precioTotalCemento;

	precioArena=0;
	precioCemento=0;
	precioCal=0;
	cantidadCemento=0;
	cantidadCal=0;
	cantidadArena=0;
	respuesta="si";
	precioTotalArena=0;
	precioTotalCal=0;
	precioTotalCemento=0;
 	while(respuesta=="si")
 	{
	 	productoIngresado=prompt("Ingrese el producto: ");
		while(isNaN(productoIngresado)==false || productoIngresado!="arena" && productoIngresado!="cal" && productoIngresado!="cemento")
		{
			productoIngresado=prompt("Producto invalido, intente nuevamente con arena, cal o cemento: ");
		}

		cantidadIngresada=prompt("Ingrese la cantidad: ");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<1)
		{
			cantidadIngresada=prompt("Cantida incorrecta, intente nuevamente: ");
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		precioIngresado=prompt("Ingrese el precio: ");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<0)
		{
			precioIngresado=prompt("Precio incorrecto, intente nuevamente: ");
			precioIngresado=parseInt(precioIngresado);
		}
		
		respuesta=prompt("Desea continuar? Ingrese si.");	

		switch(productoIngresado)
		{
			case "arena":
				precioArena=precioIngresado*cantidadIngresada;
				precioTotalArena=precioArena+precioTotalArena;
				cantidadArena=cantidadArena+cantidadIngresada;
				break;
			case "cal":
				precioCal=precioIngresado*cantidadIngresada;
				precioTotalCal=precioCal+precioTotalCal;
				cantidadCal=cantidadCal+cantidadIngresada;	
				break;
			case "cemento":
				precioCemento=precioIngresado*cantidadIngresada;
				precioTotalCemento=precioCemento+precioTotalCemento;
				cantidadCemento=cantidadCemento+cantidadIngresada;
				break;
		}
 	} //fin while principal

 	precioTotal=precioTotalCal+precioTotalArena+precioTotalCemento;
 	cantidadTotal=cantidadCemento+cantidadCal+cantidadArena;

 	if(cantidadTotal<10)
 	{
 		descuento=0;
 	}
 	else
 	{
 		if(cantidadTotal<30)
 		{
 			descuento=15;
 		}
 		else
 		{
 			descuento=25;
 		}
 	}


 	if(descuento==0)
 	{
 		precioTotalDescuento="No aplica descuento.";
 	}
 	else
 	{
 		precioDescuento=(precioTotal*descuento)/100;
 		precioTotalDescuento=precioTotal-precioDescuento;
 	}
 	
	if(cantidadCemento>cantidadCal)
	{
		if(cantidadCemento>cantidadArena)
		{
			masBolsas="Cemento";
		}
		else
		{
			masBolsas="Arena";
		}
	} 
	else
	{
		masBolsas="Cal";
	}
	
	if(precioCemento>precioCal)
	{
		if(precioCemento>precioArena)
		{
			masCaro="Cemento";
		}
		else
		{
			masCaro="Arena";
		}
	} 
	else
	{
		masCaro="Cal";
	}




 	mensajeA="El importe total a pagar es: "+precioTotal+" y el importe a pagar con descuento es: "+precioTotalDescuento;
 	mensajeB="El producto con mas cantidad de bolsas es: "+masBolsas;
 	mensajeC="El producto mas caro es: "+masCaro;

 	alert(mensajeA);
 	alert(mensajeB);
 	alert(mensajeC);

}//Fin funcion
