//Careri Facundo
//Ferrete Iluminacion Switch (marca) y if (cantidad)
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio () 
{
 var cantidad;
 var marcas;
 var precio;
 var resultado;
 var total;
 var IIBB;
 var descuento;

 cantidad=document.getElementById('txtIdCantidad').value;
 cantidad=parseInt(cantidad);

 marcas=document.getElementById('Marca').value;

 precio=cantidad*35;
 descuento=0;

/*switch (marcas)
{
	case "ArgentinaLuz":
		if(cantidad<3)
		{
			descuento=0;
		}
		else
		{
			if(cantidad==3)
			{
				descuento=15;
			}
			else
			{
				if(cantidad==4)
				{
					descuento=25;
				}
				else
				{
					if(cantidad==5)
					{
						descuento=40;
					}
					else
					{
						descuento=50;
					}
				}
			}

		}
		break;
	case "FelipeLamparas":
		if(cantidad<3)
		{
			descuento=0;
		}
		else
		{
			if(cantidad==3)
			{
				descuento=10;
			}
			else
			{
				if(cantidad==4)
				{
					descuento=25;
				}
				else
				{
					if(cantidad==5)
					{
						descuento=30;
					}
					else
					{
						descuento=50;
					}
				}
			}

		}
		break;
	default:
		if(cantidad<3)
		{
			descuento=0;
		}
		else
		{
			if(cantidad==3)
			{
				descuento=5;
			}
			else
			{
				if(cantidad==4)
				{
					descuento=20;
				}
				else
				{
					if(cantidad==5)
					{
						descuento=30;
					}
					else
					{
						descuento=50;
					}
				}
			}

		}
		break;
}*/

/*if(cantidad>5)
{
	descuento=50;
}
else
{
	if(cantidad==5 && marcas=="ArgentinaLuz")
	{
		descuento=40;	
	}
	else
	{
		if(cantidad==5 && marcas!="ArgentinaLuz")
		{
			descuento=30;
		}
		else
		{
			if(cantidad==4 && marcas=="ArgentinaLuz")
			{
				if(marcas=="FelipeLamparas")
				{
					descuento=25;
				}
			}
			else
			{
				if(cantidad==4 && marcas!="ArgentinaLuz")
				{
					if(marcas!="FelipeLamparas")
					{
						descuento=20;
					}
				}
				else
				{
					if(cantidad==3 && marcas=="ArgentinaLuz")
					{
						descuento=15;
					}
					if(cantidad==3 && marcas=="FelipeLamparas")
					{
						descuento=10;
					}
					if (cantidad==3 && marcas!="ArgentinaLuz")
					{
						if(marcas!="FelipeLamparas")
						{
							descuento=5;
						}
					}
					else
					{
						if (cantidad<3)
						{
						 	descuento=0;
						}
					}
				}

			}
		}
	}
}*/

switch(cantidad)
{
	case 1:
	case 2:
		descuento=0;
		break;
	case 3:
		switch(marcas)
		{
			case "ArgentinaLuz":
				descuento=15;
				break;
			case "FelipeLamparas":
				descuento=10;
				break;
			default:
				descuento=5;
				break;
		}
			break;
	case 4:
		switch(marcas)
		{
			case "ArgentinaLuz":
			case "FelipeLamparas":
				descuento=25;
				break;
			default:
				descuento=20;
				break;	
		}
			break;
	case 5:
		switch(marcas)
		{
			case "ArgentinaLuz":
				descuento=40;
				break;
			default:
				descuento=30;
				break;
		}
		break;
	default:
		descuento=50;
		break;

}

/*switch(cantidad)
{
	case 1:
	case 2:
		descuento=0;
		break;
	case 3:
		if(marcas=="ArgentinaLuz")
		{
			descuento=15;
		}
		else
		{
			if(marcas=="FelipeLamparas")
			{
				descuento=10;
			}
			else
			{
				descuento=5;
			}
		}
		break;
	case 4:
		if (marcas=="ArgentinaLuz" || marcas=="FelipeLamparas")
		{
			descuento=25;
		}
		else
		{
			descuento=20;
		}
		break;
	case 5:
		if(marcas=="ArgentinaLuz")
		{
			descuento=40;
		}
		else
		{
			descuento=30;
		}
		break;
	default:
		descuento=50;
		break;
}*/

resultado=precio-(precio*descuento/100);



	if(resultado>120)
	{
		IIBB=(resultado*10)/100;
		resultado=IIBB+resultado;
		alert("IIBB Usted pago $"+IIBB);
	}
document.getElementById('txtIdprecioDescuento').value=resultado;
}