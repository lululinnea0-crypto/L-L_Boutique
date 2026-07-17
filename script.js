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
