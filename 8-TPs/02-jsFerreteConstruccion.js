//Careri Facundo
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;    
    let anchoTerreno;
	let perimetroTerreno;
	let resultado;

	
    largoTerreno = document.getElementById('txtIdLargo').value;
    largoTerreno = parseInt (largoTerreno);

    anchoTerreno = document.getElementById('txtIdAncho').value;
    anchoTerreno = parseInt (anchoTerreno);

    perimetroTerreno=(largoTerreno+anchoTerreno)*2;
    resultado = (perimetroTerreno * 3);

    alert("Son necesarios "+resultado+" metros de alambre.");


}
function Circulo () 
{
    let radioTerreno;
    let pi;
    let circunferenciaTerreno;
    let resultado;

    pi = Math.PI;

    radioTerreno = document.getElementById('txtIdRadio').value;
    radioTerreno = parseInt (radioTerreno);

    circunferenciaTerreno = pi * (radioTerreno * 2);
    resultado = circunferenciaTerreno * 3;

    alert("Son necesarios "+resultado+" metros de alambre.");

}
 	
function Materiales () 
{
	let largoTerreno;    
    let anchoTerreno;
    let areaTerreno;
    let bolsasCemento;
    let bolsasCal;

	
    largoTerreno = document.getElementById('txtIdLargo').value;
    largoTerreno = parseInt (largoTerreno);

    anchoTerreno = document.getElementById('txtIdAncho').value;
    anchoTerreno = parseInt (anchoTerreno);

    areaTerreno = largoTerreno * anchoTerreno;

    bolsasCemento = areaTerreno * 2;
    bolsasCal = areaTerreno * 3;

    alert ("Se usaran "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal.");
}