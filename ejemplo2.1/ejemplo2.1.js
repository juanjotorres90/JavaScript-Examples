'use strict';

// Ejemplo de como crear objetos por medio de constructores

//Método antiguo

var luis = {
    name: 'Luis',
    yearOfBirth: 1987,
    job: 'teacher'
}

var maria = {
    name: 'Maria',
    yearOfBirth: 1990,
    job: 'designer'
}
// console.log("Objetos creados sin constructor:", luis, maria);

//! Método constructor

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// var luis = new Person('Luis',1987, 'teacher');
// var maria = new Person('Maria',1990, 'designer');

// console.log("Objetos creados con constructor:", luis, maria);

//! Constructor con métodos

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calcAge = function() {
        this.age = 2019 - this.yearOfBirth;
        console.log("La edad de " + this.name + " es:", this.age);
}
}


var luis = new Person('Luis',1987, 'teacher');
var maria = new Person('Maria',1990, 'designer');
console.log("Objetos creados con constructor después de llamar a método:", luis, maria);
luis.calcAge();
maria.calcAge();


//! Constructor sin métodos, métodos mediante prototype

var Person = function (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

Person.prototype.calcAge = function() {
        this.age = 2019 - this.yearOfBirth;
        console.log("La edad de " + this.name + " es:", this.age);
}

Person.prototype.lastName = 'Vicente';

var luis = new Person('Luis', 1987, 'teacher');
console.log("Objetos creados con constructor y PROTOTYPE:", luis);

luis.calcAge();
console.log("Objetos creados con constructor y PROTOTYPE después de llamar a calcAge:", luis);
console.log("Apellidos obtenido con PROTOTYPE:", luis.lastName);