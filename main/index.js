const contenedorTarjetas = document.getElementById("contenedor-de-productos")

function cargarLocalStorage() {

}

function crearTarjetaProductos(productos) {
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("article");
        nuevoProducto.classList = "tarjeta-producto";

        nuevoProducto.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${producto.img}')`;

        nuevoProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <a onclick="comprarProducto(${producto.id})" >
                <button class="btn-info" title="Mas Informacion">
                    Comprar
                </button>
            </a>
        `;

        contenedorTarjetas.appendChild(nuevoProducto);
    });
}

crearTarjetaProductos(productos);

function comprarProducto(producto) {
    console.log("entro comprarProducto");
    let usuarios = DevolverUsuarios();
    let usuarioIniciado = BuscarUsuarioIniciado(usuarios);

    if (usuarioIniciado != null && usuarioIniciado.sesionIniciada) {
        window.location.href = "./compraProductos.html"
    }
    else {
        alert("Debes iniciar sesion para realizar una compra.");
    }
    
    localStorage.setItem("producto", JSON.stringify(producto));
}

function irACarrito() {
    let carrito = localStorage.getItem("carrito");
    if (carrito) {
        window.location.href = "./carrito.html"
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El carrito esta vacio :("
        });
    }
}