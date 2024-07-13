function agregarAlCarrito(){
    console.log("agregar al carrito")
    const cantidad = document.getElementById('btn-cantidad').value;
    console.log("id "+ localStorage.getItem("producto"))
    const idproducto = JSON.parse(localStorage.getItem("producto"));
    const productoCarrito = {
      idProducto: idproducto,
      cantidad: cantidad
    };
  
    const productosCarrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];
  
    let productoEncontrado = false;
    productosCarrito.forEach(productoLocal => {
      if (productoLocal.idProducto === idproducto) {
        productoLocal.cantidad = parseInt(productoLocal.cantidad)+parseInt(cantidad);
        productoEncontrado = true;
        return;
      }
    });
  
    if (!productoEncontrado) {
      productosCarrito.push(productoCarrito);
    }
  
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
  }