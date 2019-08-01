'use strict';

//*************** Arrow functions


// ES5

function functionName(parameters) {
    return parameters;
}

// ES6

var functionNameES6 = (parameters) => {
 return parameters;
}


console.log("ES5", functionName(5));
console.log("ES6", functionNameES6(6));