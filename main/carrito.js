function agregarAlCarrito() {
    console.log("agregar al carrito")
    const cantidad = document.getElementById('btn-cantidad').value;
    console.log("id " + localStorage.getItem("producto"))
    const idproducto = JSON.parse(localStorage.getItem("producto"));
    const productoCarrito = {
        idProducto: idproducto,
        cantidad: cantidad
    };

    const productosCarrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];

    let productoEncontrado = false;
    productosCarrito.forEach(productoLocal => {
        if (productoLocal.idProducto === idproducto) {
            productoLocal.cantidad = parseInt(productoLocal.cantidad) + parseInt(cantidad);
            productoEncontrado = true;
            return;
        }
    });

    if (!productoEncontrado) {
        productosCarrito.push(productoCarrito);
    }

    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
}

function mostrarCarrito() {
    Swal.fire(

    );
}

document.addEventListener("DOMContentLoaded", async function () {
    const contenidoCarrito = await cargarTemplateCarrito();
    console.log("ejecuta crearPaginaCarrito: " + contenidoCarrito)
    const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    const contenedorArticulos = document.getElementById("listadoDeProductos");
    console.log(contenedorArticulos);

    if (contenedorArticulos) {
        console.log("encuentra contenedor");
        console.log("carrito: " + carrito);
        carrito.forEach(articulo => {
            const producto = productos.find(productoAux => productoAux.id === articulo.idProducto);


            let divArticulo = document.createElement("div");

            divArticulo.innerHTML = `
            <article class="tarjeta-producto">
            <div class="imagen-producto" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{{producto.img}}')"></div>
            <div class="informacion-producto">
              <h3 id="nombreProducto">${producto.nombre}</h3>
              <div class="boton">
                  <label for="btn-cantidad">Cantidad:</label>
                  <input Id='btn-cantidad' type="number" value="${articulo.cantidad}" min="1" max="10" autocomplete="off"
                      step="1" inputmode="numeric">
              </div>
              <p>
                  <span class="c/u">
                    <strong>$${producto.precio}</strong>
                  </span>
              </p>
            </div>
            </article>`
            contenedorArticulos.appendChild(divArticulo);





            /*
            divArticulo.innerHTML = contenidoCarrito;

            contenedorArticulos.appendChild(divArticulo);
            
            const template = document.getElementById("template-tarjeta-producto").content.cloneNode(true);
            template.querySelector("#nombreProducto").textContent = producto.nombre;*/
        }
        )
    }
    console.log("sale de crearPaginaCarrito")
});


async function cargarTemplateCarrito() {
    const urlBotones = "templateCarrito.html";
    const respuesta = await fetch(urlBotones);

    if (respuesta.ok) {
        const contenidoCarrito = await respuesta.text();
        return contenidoCarrito;
    } else {
        console.error("Error al cargar el html de templateCarrito:", respuesta.status);
        return "";
    }
}