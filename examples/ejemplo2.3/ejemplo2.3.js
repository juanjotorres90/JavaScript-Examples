'use strict';

//*************** Ejemplo funciones como argumentos

// Array fechas de nacimiento

var years = [1990, 2015, 1937, 2005, 1998];

// Helper functions
function calcAge(year) {
        return 2019 - year;
}

function isFullAge(age) {
        return age >= 18;
}
function maxHeartRate(age) {
        if (age >= 18 && age <=81) {
                return Math.round(206.9 - (0.67*age));
        } else {
                return -1;
        }
}


// Main function

function arrayCalc(arr, fn) {
        var arrRes = [];
        for (let i = 0; i < arr.length; i++) {
                arrRes.push(fn(arr[i]));

        }
        return arrRes;
}

// Llamadas

var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);

console.log("Edades:", ages);
console.log("Mayores de edad:", fullAges);
console.log("Ritmos cardíacos:", heartRate);
