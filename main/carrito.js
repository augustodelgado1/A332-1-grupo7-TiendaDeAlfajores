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
    let precioTotal = 0;

    if (contenedorArticulos) {
        console.log("encuentra contenedor");
        console.log("carrito: " + carrito);
        carrito.forEach(articulo => {
            const producto = productos.find(productoAux => productoAux.id === articulo.idProducto);


            let divArticulo = document.createElement("div");
            let precioFinal = articulo.cantidad * producto.precio;

            divArticulo.innerHTML = `
            <article class="tarjeta-producto">
            <div class="informacion-producto">
              <h3 id="nombreProducto">${producto.nombre}</h3>
              <div class="boton">
                    <label for="btn-cantidad">Cantidad:</label>
                    <input Id='btn-cantidad' type="number" value="${articulo.cantidad}" min="1" max="20" autocomplete="off"
                      step="1" inputmode="numeric">
                    <label for="btn-cantidad">Precio unitario: $${producto.precio}</label>
              </div>
              <p>
                  <span class="precioFinal">
                    <strong>Total Producto: $${precioFinal}</strong>
                  </span>
              </p>
            </div>
            </article>`
            contenedorArticulos.appendChild(divArticulo);

            precioTotal += precioFinal;
            /*
            divArticulo.innerHTML = contenidoCarrito;

            contenedorArticulos.appendChild(divArticulo);
            
            const template = document.getElementById("template-tarjeta-producto").content.cloneNode(true);
            template.querySelector("#nombreProducto").textContent = producto.nombre;*/
        });

        let divPrecioFinal = document.createElement("div");
        divPrecioFinal.classList.add("precioTotal");

        divPrecioFinal.innerHTML= `
            <h3 id="nombreProducto">Precio final: $${precioTotal}</h3>
        `
        contenedorArticulos.appendChild(divPrecioFinal);        

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

function mostrarMensaje(){
    Swal.fire({
        icon: "success",
        title: "Compra realizada!",
        showConfirmButton: false,
        timer: 1500
      });
    // localStorage.removeItem("producto");
    // localStorage.removeItem("cantidad");
}