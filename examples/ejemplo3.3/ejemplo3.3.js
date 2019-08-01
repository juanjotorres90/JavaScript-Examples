'use strict';

//*************** filter, map, some, reduce, foreach en ES6


/* forEach() se utiliza para el mismo código sobre un array, pero no modifica el array. Genérico, utilizar si no es posible solucionar el problema con map, some, reduce... */

let food = ["mango", "rice", "pepper", "pear"];

food.forEach(function(element) {
    console.log(element);
});

//! map() es como forEach() pero MODIFICA el array original!! devuelve un array

let money = [200,400,300,100];

let newMoney = money.map(function(moneyItem) {
    return moneyItem /10;
});

console.log("Array de money modificado con map:", newMoney);


//! filter() comprueba todos los elementos del array en base a un criterio, devuelve un array con los elementos que cumplan dicho criterio

let ages = [18,29,4,67,10];

console.log("Edades:", ages);

let fullAge = ages.filter(function(itemAge) {
    return itemAge >= 18;
});

console.log("Mayores de edad con filter:", fullAge);

//! find() para seleccionar un elemento de un array

let ages2 = [18,29,4,67,10];

console.log("Edades:", ages2);

let fullAge2 = ages.find(function(itemAge) {
    return itemAge >= 18;
});

console.log("Mayores de edad con find:", fullAge2);

//! reduce() reducir un array a un único valor

var total = [0,1,2,3,4].reduce(function(total, valorActual, indice, array) {
    var indice = indice;
    var array = array;
    return total + valorActual;
});

console.log(total);

var suma = [0,1,2,3,4].reduce(function(a,b) {
    return a + b;
});

console.log(suma);