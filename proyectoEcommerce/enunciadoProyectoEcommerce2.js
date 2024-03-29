/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta segunda parte, haremos:
1. Crear una función que calcule el precio total del carrito
2. Implementar dos botones en el HTML que añadan el producto1 y producto2 al carrito respectivamente.
3. Modificar las funciones creadas previamente para que todas tengan un console.log con los resultados, para poder ir viendo los resultados con las interacciones con el usuario
4. Implementar un botón que vacíe el carrito de la compra.
5. Implementar dos botones que elmiminen del carrito los productos1 y 2. Para ello es        conveniente añadir un nuevo campo a los productos llamado id.
   Se debe hacer un barrido al array shoppingCart, y poner un if dentro que compare los id de los productos.
   Se tiene que usar shoppingCart.splice(i, 1);

*/

'use strict';


var producto1 = {
    id: 1,
    name: "Producto bonito 1",
    price: 25,
    description: "Muy bonito"
}

var producto2 = {
    id: 2,
    name: "Producto genial 2",
    price: 15,
    description: "Es genial para todo"
}

var shoppingCart = [];
var totalPriceLoop;


var button1 = document.getElementById("boton1");
var button2 = document.getElementById("boton2");
var empty = document.getElementById("vaciar");
var totalPrice = document.getElementById("calc-precio");
var delProduct1 = document.getElementById("eliminar-producto1");
var delProduct2 = document.getElementById("eliminar-producto2");

function addToCart(producto) {
  shoppingCart.push(producto);
  console.log(shoppingCart);

};


//! 2.
button1.addEventListener("click", function(){addToCart(producto1)}, false);
button2.addEventListener("click", function(){addToCart(producto2)}, false);


totalPrice.addEventListener("click", function(){calcTotalPrice()}, false);
empty.addEventListener("click", function(){emptyCart()}, false);
delProduct1.addEventListener("click", function(){deleteProduct(producto1)}, false);
delProduct2.addEventListener("click", function(){deleteProduct(producto2)}, false);



//! 4
function emptyCart() {
    shoppingCart = [];
    totalPrice = 0;
    console.log(shoppingCart);
}


//! 1.
function calcTotalPrice() {
    totalPriceLoop = 0;
for (var i=0; i<shoppingCart.length;i ++) {
    totalPriceLoop += shoppingCart[i].price;
}
console.log(totalPriceLoop);
}




/* 
var newCart = [];

function deleteProduct(producto) {
    var newCart = [];
    console.log(shoppingCart);
    for (var i=0; i<shoppingCart.length;i++) {
        if (shoppingCart[i].id === producto.id) {
            // shoppingCart.splice(i,1);
            // newCart.push(shoppingCart[i]);
        }
    }
    // shoppingCart = newCart;
    console.log(shoppingCart);
}
 */




function deleteProduct(producto) {
    var newCart = [];
    console.log(shoppingCart);
    for (var i=0; i<shoppingCart.length;i++) {
        if (shoppingCart[i].id !== producto.id) {
            // shoppingCart.splice(i,1);
            newCart.push(shoppingCart[i]);
        }
    }
    shoppingCart = newCart;
    console.log(shoppingCart);
}

