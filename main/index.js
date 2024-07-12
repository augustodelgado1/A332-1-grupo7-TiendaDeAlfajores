const contenedorTarjetas = document.getElementById("contenedor-de-productos")

function cargarLocalStorage(){
    
}

function crearTarjetaProductos(productos) {
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("article");
        nuevoProducto.classList = "tarjeta-producto";

        nuevoProducto.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${producto.img}')`;

        nuevoProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <a href="./compraProductos.html" onclick="comprarProducto(event, ${JSON.stringify(producto)})" >
                <button class="btn-info" title="Mas Informacion">
                    Comprar
                </button>
            </a>
        `;

        contenedorTarjetas.appendChild(nuevoProducto);
    });
}

crearTarjetaProductos(productos);
