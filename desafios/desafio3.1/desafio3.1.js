'use strict';

//*************** Ejercicio map()  Supongamos que tenemos una app que guarda un array de tareas(task) del día. Cada tarea es un objeto con los campos: "name" y "duration".
//! 1 Queremos crear un array con el nombre de las tareas

var task = [
{
    name: "Programming .map example 1",
    duration: 120
},
{
    name: "Work out",
    duration: 60
},
{
    name: "Netflix",
    duration: 240
}

];


// Con bucle for
var taskNames = [];

for (let i = 0; i < task.length; i++) {
    taskNames.push([task[i].name]);
}
console.log("Task name with for: ", taskNames);


// Con .forEach
var taskNames = [];
task.forEach(function(element) {
    taskNames.push(element.name);
});

console.log("Task name with forEach: ", taskNames);


// Con .map
taskNames = task.map(function(element) {
    return element.name;
});

console.log("Task name with map: ", taskNames);


