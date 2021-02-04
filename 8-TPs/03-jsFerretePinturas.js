//Careri Facundo
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let conversion;


	 temperatura = document.getElementById('txtIdTemperatura').value;
	 temperatura = parseInt (temperatura);

	conversion = (temperatura - 32) / 1.80;

	alert ("La temperatura en Centigrados es: " + conversion + "°C");



}

function CentigradosFahrenheit () 
{
	let temperatura;
	let conversion;


	 temperatura = document.getElementById('txtIdTemperatura').value;
	 temperatura = parseInt (temperatura);

	conversion = (temperatura * 1.80) + 32;

	alert ("La temperatura en Fahrenheit es: " + conversion + "°F");	
}
