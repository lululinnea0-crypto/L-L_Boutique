localStorage.clear();
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

console.log("JS cargado correctamente");

// ==========================
// MOSTRAR CARRITO
// ==========================

function mostrarCarrito(){

    const contenedor = document.getElementById("lista-carrito");

    if(!contenedor) return;


    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


    if(carrito.length === 0){

        contenedor.innerHTML = `
            <p>🛒 Tu carrito está vacío</p>
        `;

        return;

    }


    contenedor.innerHTML = "";


    carrito.forEach((producto, index)=>{


        contenedor.innerHTML += `

        <div class="item-carrito">

            <img src="${producto.imagen}" alt="${producto.nombre}">


            <div class="datos">

                <h3>${producto.nombre}</h3>

                <p>$${producto.precio}</p>

                <p>
                <strong>Color:</strong> ${producto.color}
                </p>

                <p>
                <strong>Talle:</strong> ${producto.talle}
                </p>

                <div class="cantidad">

    <button onclick="cambiarCantidad(${index}, -1)">
        -
    </button>

    <span>
        ${producto.cantidad}
    </span>

    <button onclick="cambiarCantidad(${index}, 1)">
        +
    </button>

</div>


                <button onclick="eliminarProducto(${index})" class="eliminar">

                    🗑 Eliminar producto

                </button>


            </div>

        </div>

        `;


    });


}

// ==========================
// ELIMINAR PRODUCTO
// ==========================

function eliminarProducto(index){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index,1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();

}

// ==========================
// CAMBIAR CANTIDAD
// ==========================

function cambiarCantidad(index, cambio){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


    carrito[index].cantidad += cambio;


    if(carrito[index].cantidad < 1){

        carrito[index].cantidad = 1;

    }


    localStorage.setItem("carrito", JSON.stringify(carrito));


    mostrarCarrito();

}

localStorage.removeItem("carrito");
alert("Carrito limpiado");
