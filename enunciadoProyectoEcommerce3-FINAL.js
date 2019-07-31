/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta tercera parte, haremos:
1. Implementar dos botones que añadan producto 1 o 2 a un array
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
    contador: 1,
    favorite: false
}

var producto2 = {
    id: 2,
    name: "Producto genial 2",
    price: 15,
    description: "Es genial para todo",
    contador: 1,
    favorite: false
}

var shoppingCart = {
    discount: 0.15,
    products: [],
    addToCart: function (producto) {
        var chivato = false;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === producto.id) {
                producto.contador++;
                chivato = true;
                console.log("Producto estaba en el carrito, sumo contador:", producto);
            }

        }

        if (chivato === false) {
            this.products.push(producto);
            console.log("Producto no estaba en el carrito, añado producto:", producto);
        }

        console.log("El carrito está así:", this.products);

    },
    resetShoppingCart: function () {
        for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].favorite === true) {
            this.products = this.products[i]
            console.log("El carrito se vació pero mantiene los productos favoritos:", this.products);
            console.log("El producto favorito que no se puede eliminar es:", this.products);
            return;
        }
    }
        this.products = [];
        console.log("Se ha vaciado el carrito", this.products);
        for (var i = 0; i < this.products.length; i++) {
            this.products[i].contador = 1;
        }
    },
    calculateTotalPrice: function () {
        var totalPriceLoop = 0;
        for (var i = 0; i < this.products.length; i++) {
            totalPriceLoop += this.products[i].price * this.products[i].contador;
        }
        console.log("El precio total de la compra es:", totalPriceLoop);
    },
    removeProduct: function (producto) {


        var newCart = [];



        if (producto.favorite === true) {
            this.products;
            console.log("El carrito sigue así", this.products);
            console.log("El producto favorito que no se puede eliminar es:", producto);
            return;
        }
        for (var i = 0; i < this.products.length; i++) {
            //Productos de la cesta que no queremos eliminar
            if (this.products[i].id !== producto.id && producto.favorite === false) {
                newCart.push(this.products[i]);
                //Producto que queremos eliminar
            } else {
                //Cantidad mayor que 1, restamos contador
                if (this.products[i].contador > 1) {
                    this.products[i].contador--;
                    newCart.push(this.products[i]);
                } else if (this.products[i].contador === 1) {
                    //Cantidad es 1, no lo agregamos al carrito
                }
            }

        }

        this.products = newCart;

        console.log("El carrito con los productos eliminados:", this.products);
    },
    addFavProduct: function (producto) {
        if (producto.favorite === false) {
            producto.favorite = true;
        } else {
            producto.favorite = false;
        }
        console.log("¿El producto " + producto.id + " es favorito? "+ producto.favorite);
    }
};



//! Variables

var button1 = document.getElementById("boton1");
var button2 = document.getElementById("boton2");
var empty = document.getElementById("vaciar");
var totalPrice = document.getElementById("calc-precio");
var delProduct1 = document.getElementById("eliminar-producto1");
var delProduct2 = document.getElementById("eliminar-producto2");
var favProduct1 = document.getElementById("favorito-producto1");
var favProduct2 = document.getElementById("favorito-producto2");



//! Event listeners

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