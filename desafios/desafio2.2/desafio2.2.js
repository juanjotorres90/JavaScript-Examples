/*
  En tu empresa te han pedido un software que de soporte al departamento de marketing.
  Se necesita llevar un seguimiento de las redes sociales.
  1. Crear un contructor de objetos socialNetwork, que contengan los siguientes campos: name, arrayLikes, importance (de 0 a 1), numberOfUsers
  2. Usar el contructor para instanciar tres redes sociales:
    - Facebook con likes [201, 245, 500, 650, 1103, 347], importancia 0.8 y 14530 usuarios.
    - Instagram con likes [303, 21, 124, 150, 23, 31], importancia 0.6 y 230 usuarios.
    - Twitter con likes [205, 518, 1123, 4350, 233, 3431], importancia 0.4 y 3230 usuarios.
  3. Añadir 2 métodos en el constructor para calcular el total de likes y la media de cada red social
  4. Cambiar estos dos métodos por dos funciones prototype.
*/

'use strict';

var socialNetwork = function (name, arrayLikes, importance, numberOfUsers) {
  this.name = name;
  this.arrayLikes = arrayLikes;
  this.importance = importance;
  this.numberOfUsers = numberOfUsers;
  this.calcLikes = function () {  
    let sum = 0;
    for (let i= 0; i< this.arrayLikes.length; i++) {
       sum += this.arrayLikes[i];
    }
    console.log("La suma de likes de "+ this.name + " es:", sum);
  };
  this.calcAverage = function () {
    // this.calcLikes();
    let sum = 0;
    let average = 0;
    for (let i= 0; i< this.arrayLikes.length; i++) {
       sum += this.arrayLikes[i];
    }
    average = sum/this.arrayLikes.length;
    console.log("La media de likes de "+ this.name + " es:", average);
  }
};



var facebook = new socialNetwork('Facebook',[201, 245, 500, 650, 1103, 347],0.8,14530);
var instagram = new socialNetwork('Instagram',[303, 21, 124, 150, 23, 31],0.6,230);
var twitter = new socialNetwork('Twitter',[205, 518, 1123, 4350, 233, 3431],0.4,3230);

facebook.calcLikes();
instagram.calcLikes();
twitter.calcLikes();


// Sin prototype
console.log(facebook);
console.log(instagram);
console.log(twitter);

facebook.calcAverage();
instagram.calcAverage();
twitter.calcAverage();




//! 4.

var socialNetwork = function (name, arrayLikes, importance, numberOfUsers) {
  this.name = name;
  this.arrayLikes = arrayLikes;
  this.importance = importance;
  this.numberOfUsers = numberOfUsers;
}

socialNetwork.prototype.calcLikes = function () {
  let sum = 0;
  for (let i= 0; i< this.arrayLikes.length; i++) {
     sum += this.arrayLikes[i];
  }
  console.log("La suma de likes de "+ this.name + " es:", sum);
};

socialNetwork.prototype.calcAverage = function() {
  let sum = 0;
  let average = 0;
  for (let i= 0; i< this.arrayLikes.length; i++) {
     sum += this.arrayLikes[i];
  }
  average = sum/this.arrayLikes.length;
  console.log("La media de likes de "+ this.name + " es:", average);
}

var facebook = new socialNetwork('Facebook',[201, 245, 500, 650, 1103, 347],0.8,14530);
var instagram = new socialNetwork('Instagram',[303, 21, 124, 150, 23, 31],0.6,230);
var twitter = new socialNetwork('Twitter',[205, 518, 1123, 4350, 233, 3431],0.4,3230);

console.log(facebook);
console.log(instagram);
console.log(twitter);

facebook.calcLikes();
facebook.calcAverage();
instagram.calcLikes();
instagram.calcAverage();
twitter.calcLikes();
twitter.calcAverage();


// Con prototype
console.log(facebook);
console.log(instagram);
console.log(twitter);