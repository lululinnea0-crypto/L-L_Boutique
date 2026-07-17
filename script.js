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
