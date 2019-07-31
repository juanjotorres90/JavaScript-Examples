'use strict';

/*
  Una empresa que se dedica del cuidado y mangtenimiento de los bosques, te pide un sofware para calcular la edad de diferentes especies de plantas.
  1. Crar una función que devuelta direrentes funciones para los casos:
  - Si es un pino, la edad será el diámetro (cm) dividido entre dos.
  - Si es un abeto, la edad será la (altura * diámetro)/ 10
  - Si es tomillo, será la altura * 5
  2. Utilizar las funciones creadas para cada caso.
*/

function agePlants(tree) {
        if (tree === 'pino') {
                return function(diametro) {
                        console.log("La edad del pino es:",diametro/2);
                }
        } else if(tree === 'abeto') {
                return function(altura, diametro) {
                        console.log("La edad del abeto es:",altura*diametro/10);
                }
        } else if (tree === 'tomillo') {
                return function(altura) {
                        console.log("La edad del tomillo es:",altura*5);
                }
        }
}

var calcPino = agePlants('pino');
var calcAbeto = agePlants('abeto');
var calcTomillo = agePlants('tomillo');


calcPino(100);
calcAbeto(300,100);
calcTomillo(200);

agePlants('pino')(100);
agePlants('abeto')(300,100);
agePlants('tomillo')(200);