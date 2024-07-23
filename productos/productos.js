"use strict";

// Arrays de productos, precios y cantidades
let arrayProductos = ["lapices", "hojas", "cartulina"];
let arrayPrecios = [1000, 800 , 200];
let arrayCantidad = [100, 50, 10];
//let mensajeError = document.getElementsByClassName("mensajeError");

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ()=> {
        let cantidad = document.querySelectorAll("input")[i].value;
        if (cantidad > 0 && arrayCantidad[i] - cantidad >= 0) {
            agregarCarrito(i, cantidad);
            ocultarMensajeError();
        } else if(cantidad>arrayCantidad[i]){
            mensajeError();
    
        }
    });
}

// Función para agregar al carrito
function agregarCarrito(i, cantidad) {
    let subtotal = cantidad * arrayPrecios[i];
    let totalActual =+ document.getElementById("total").innerText;
    document.getElementById("total").innerText = totalActual + subtotal;
}
function mensajeError(){
    let elemento = document.querySelector(".mensajeError");
    elemento.classList.add("ocultarMensaje");
}
function ocultarMensajeError(){
    let elemento = document.querySelector(".mensajeError");
    elemento.classList.remove("ocultarMensaje");
}