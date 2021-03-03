//Careri
function mostrar()
{
	var numero;
	var numeroAnterior;
	var limite;


	
	for(numero=0;numero<20;numero++)
	{
		limite=(numero/2);
		for(numeroAnterior=2;numeroAnterior<limite;numeroAnterior++)
		{
			if(numero%numeroAnterior==0)
			{	
				break;
			}
		}
		if(numeroAnterior==limite)
		{
			console.log(numero);
		}		
	}
	

}//FIN DE LA FUNCIÓN
