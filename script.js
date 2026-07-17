alert("Script funcionando");
// ==========================
// CARRITO L&L BOUTIQUE
// ==========================

// Obtener carrito guardado
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto
function agregarAlCarrito(producto) {
    carrito.push(producto);
    guardarCarrito();

    alert("🛍️ Producto agregado al carrito.");
}

// ==========================
// SELECCIÓN DE TALLE
// ==========================

let talleSeleccionado = "";

document.querySelectorAll(".talles button").forEach(boton => {

    boton.addEventListener("click", () => {

        document.querySelectorAll(".talles button").forEach(b => {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");
        talleSeleccionado = boton.dataset.talle;

    });

});

// ==========================
// SELECCIÓN DE COLOR
// ==========================

let colorSeleccionado = "";

document.querySelectorAll(".colores button").forEach(boton => {

    boton.addEventListener("click", () => {

        document.querySelectorAll(".colores button").forEach(b => {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");
        colorSeleccionado = boton.dataset.color;

    });

});

// ==========================
// AGREGAR PRODUCTO AL CARRITO
// ==========================

const botonAgregar = document.querySelector(".btn-agregar");

if (botonAgregar) {

    botonAgregar.addEventListener("click", () => {


        if (talleSeleccionado === "") {

            alert("Elegí un talle");
            return;

        }


        if (colorSeleccionado === "") {

            alert("Elegí un color");
            return;

        }


        const producto = {

            nombre: document.querySelector(".info-producto h1").textContent,

            precio: 68000,

            imagen: document.querySelector(".galeria img").src,

            talle: talleSeleccionado,

            color: colorSeleccionado,

            cantidad: 1,

            pago: "50%"

        };


        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


        carrito.push(producto);


        localStorage.setItem("carrito", JSON.stringify(carrito));


        alert("🛒 Producto agregado al carrito");


    });

}
