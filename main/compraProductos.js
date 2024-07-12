const contenedorTexto = document.getElementById("cartaProducto");

function comprarProducto(event, producto) {
    console.log("entro comprarProducto");
    event.preventDefault();
    localStorage.setItem("producto", JSON.stringify(producto));
}

document.addEventListener("DOM", function() {
    const producto = JSON.parse(localStorage.getItem("producto"));
    if (producto) {
        crearPaginaProducto(producto);
        localStorage.removeItem("producto");
    } else {
        console.error('No se encontró el producto en el localStorage.');
    }
});

function crearPaginaProducto(producto) {
    const contenedorTexto = document.getElementById("cartaProducto");

    if (contenedorTexto) {
        contenedorTexto.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
        `;

        const informacion = document.createElement("div");
        informacion.classList.add("informacion");

        informacion.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>
                <span class="precio">
                    <strong>$400</strong>
                </span>
            </p>
        `;

        contenedorTexto.appendChild(informacion);
    } else {
        console.error('No se encontró el elemento con id "cartaProducto".');
    }
}
