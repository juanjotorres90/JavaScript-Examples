/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta tercera parte, haremos:
1. Implementar dos botones que añadan producto 1 o 2 a u array
   favoriteProducts
2. Hacer que no se pueda eliminar del carrito de la compra un
   producto favorito
3. Crear un nuevo campo en los productos que sea un contador de cuantos hay
   en el carrito
3. Convertir shoppingCart en un objeto, con los campos:
   - discount: number (inventado)
   - products: []
   - método addToCard(product)
   - método resetShoppingCart()
   - método calculateTotalPrice()
   - método removeProduct(product)
*/

'use strict';



var producto1 = {
    id: 1,
    name: "Producto bonito 1",
    price: 25,
    description: "Muy bonito",
    contador: 0,
    favorite: false
}

var producto2 = {
    id: 2,
    name: "Producto genial 2",
    price: 15,
    description: "Es genial para todo",
    contador: 0,
    favorite: false
}

var shoppingCart = {
    discount: 0.15,
    products: [],
    addToCart: function(producto) {
        this.products.push(producto);
        console.log(this.products);
        producto.contador++;
    },
    resetShoppingCart: function() {
        this.products = [];
        console.log(this.products);
        producto.contador = 0;
    },
    calculateTotalPrice: function() {
        var totalPriceLoop = 0;
        for (var i = 0; i < this.products.length; i++) {
            totalPriceLoop += this.products[i].price;
        }
        console.log(totalPriceLoop);
    },
    removeProduct: function(producto) {


        var newCart = [];
       
        console.log(this.products);

        for (var i = 0; i < this.products.length; i++) {
      
            if (producto.favorite === true) {
                this.products;
           console.log(this.products);
           console.log("El producto favorito que no se puede eliminar es:", producto);
        
            } else if (this.products[i].id !== producto.id && producto.favorite === false) {
                newCart.push(this.products[i]);
             
            }
     
        }
        this.products = newCart;
        console.log(this.products);
    },
    addFavProduct: function(producto) {
        if (producto.favorite === false) {
            producto.favorite =true;
        } else {
            producto.favorite = false;
        }
        console.log(producto.favorite);
    }
};

var favoriteProducts = [];

var button1 = document.getElementById("boton1");
var button2 = document.getElementById("boton2");
var empty = document.getElementById("vaciar");
var totalPrice = document.getElementById("calc-precio");
var delProduct1 = document.getElementById("eliminar-producto1");
var delProduct2 = document.getElementById("eliminar-producto2");
var favProduct1 = document.getElementById("favorito-producto1");
var favProduct2 = document.getElementById("favorito-producto2");



/* 
function addToCart(producto) {
    shoppingCart.products.push(producto);
    console.log(shoppingCart);
    producto.contador++;
}; */



button1.addEventListener("click", function () {
    shoppingCart.addToCart(producto1)
}, false);
button2.addEventListener("click", function () {
    shoppingCart.addToCart(producto2)
}, false);
totalPrice.addEventListener("click", function () {
    shoppingCart.calculateTotalPrice()
}, false);
empty.addEventListener("click", function () {
    shoppingCart.resetShoppingCart()
}, false);
delProduct1.addEventListener("click", function () {
    shoppingCart.removeProduct(producto1)
}, false);
delProduct2.addEventListener("click", function () {
    shoppingCart.removeProduct(producto2)
}, false);
favProduct1.addEventListener("click", function () {
    shoppingCart.addFavProduct(producto1)
}, false);
favProduct2.addEventListener("click", function () {
    shoppingCart.addFavProduct(producto2)
}, false);




/* 
function emptyCart() {
    shoppingCart.products = [];
    console.log(shoppingCart);
}
 */



/* 
function calcTotalPrice() {
    var totalPriceLoop = 0;
    for (var i = 0; i < shoppingCart.products.length; i++) {
        totalPriceLoop += shoppingCart.products[i].price;
    }
    console.log(totalPriceLoop);
} */




/* 

var newCart = [];
var favoriteProducts = [];

function deleteProduct(producto) {
    for (var i = 0; i < shoppingCart.products.length; i++) {
      
        if (favoriteProducts.includes(producto) === true) {
            shoppingCart.products;
       
            // alert("Not allowed to delete a favorite product from the card");
        } else if (shoppingCart.products[i] !== producto) {
            newCart.push(shoppingCart.products[i]);
            shoppingCart.products = newCart;
        }
 
    }
 
    console.log(shoppingCart);
}
 */







/* 
function addFavProduct(producto) {
    favoriteProducts.push(producto);
    console.log(favoriteProducts);
} */