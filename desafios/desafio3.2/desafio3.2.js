'use strict';

//*************** Ejercicio map() y arrow functions

/* De un array de años de nacimiento, calcular mayores de edad. */


const years = [1990,1964,1995,2005];

let ages = years.map(element => { return 2019 - element; });
let fullAge = ages.filter(element => { return element >= 18});

console.log("Edades calculadas con .map y arrow function:", ages);

console.log("Mayores de edad", fullAge);
