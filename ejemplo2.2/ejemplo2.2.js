'use strict';

//*************** Ejemplo de como crear objetos por medio de constructores y object.create

//Método antiguo

var luis = {
    name: 'Luis',
    yearOfBirth: 1987,
    job: 'teacher',
    calcAge: function() {
        this.age = 2019 - this.yearOfBirth;
        console.log("La edad de " + this.name + " es:", this.age);
}
}


// Obtener año actual
var currentDate = new Date();
var year = currentDate.getFullYear();


//! 2. Object.create

var personProto = {
        calcAge: function() {
                this.age = year - this.yearOfBirth;
                console.log("Edad calculada:", this.age);
        }
}

// 2.1 Añadir propiedades individualmente

// var maria = new personProto();
var maria = Object.create(personProto);
maria.name = 'Maria';

// 2.2 Añadir propiedades conjuntamente

var antonio = Object.create(personProto,
        {
                name: {value: 'Antonio'},
                yearOfBirth: {value: 1965},
                job: {value: 'retired'}
        });

console.log("Antonio creado con object.create:", antonio);
antonio.calcAge();
console.log("Antonio después de llamar a método callAge:", antonio);