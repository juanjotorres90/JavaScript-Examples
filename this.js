// 1. Crear objeto John con un método calulateAge, name y yearOfBirth.
// 2. Crear una función calculateAge y mostrar por console this.

'use strict';

console.log("This en el scope global: ", this);

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        // Mostramos por consola el this
        console.log("This dentro del objeto John", this);
        console.log("Edad de John es: ", 2019-this.yearOfBirth);
    }
};

function calculateAge(year) {
    console.log("La edad de John calculada por la función es: ",2019 - year);
    console.log("This dentro de la función: ", this);
};

john.calculateAge();
calculateAge(1990);