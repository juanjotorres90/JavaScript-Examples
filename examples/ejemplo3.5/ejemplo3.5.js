'use strict';

//*************** Arrays

/*
Método array.from

1. Convertir a array "array-like objects", es decir, que tienen la propiedad longitud.

2. Convertir un string a array

3. Copiar arrays: preferible operador spread
*/

//! 1.

const raceObject = {
    0: 'Lorenzo',
    1: 'Alonso',
    2: 'Tamudo',
    3: 'Rossi',
    4: 'Quique',
    5: 'Karen con boli azul',
    length: 6
};

console.log("raceObject es: ", raceObject);

let raceArray = Array.from(raceObject);

console.log("raceArray es: ", raceArray);

//! 2.

const framework = Array.from("Angular");
console.log("Array from a String:", framework);

//! 3.

var array = [1,2,3];
var newArray = array;
newArray[0] = 66;
console.log("Array original:", array);


var newArray = Array.from(array);
console.log("Nuevo array copiado:", newArray);