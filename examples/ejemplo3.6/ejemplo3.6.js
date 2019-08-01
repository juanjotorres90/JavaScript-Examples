'use strict';

//*************** Operador rest y spread  ...

//! Rest: garantizar que los parámetros a la hora de invocar una función, estén en formato array

function max(...numbers) {
    if (numbers.length == 0) {
        return;
    }
    let max = numbers[0];
    numbers.forEach((number)=>{
        if(number > max) {
            max = number;
        }
    });
    return max;
}

let maxNumber = max("10, 20, 3000, 4");

console.log("El máximo es:", maxNumber);


//! Spread: convertir una array en una lista de parámetros
 let array = ['Hola   ', ' algo ', ' mas'];
 let cadenaLimpia = limpiarEspacios(...array);