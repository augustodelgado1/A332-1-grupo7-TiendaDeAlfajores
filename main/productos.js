function VerificarAccionCompra() 
{
    const botonesComprar = document.querySelectorAll(".btn-info");
    
    botonesComprar.forEach(function(boton)
    {
        boton.addEventListener("click", function(event) {
            event.preventDefault();
            
            let usuarios = DevolverUsuarios();
            let usuarioIniciado = BuscarUsuarioIniciado(usuarios);

            if(usuarioIniciado != null && usuarioIniciado.sesionIniciada)
            {
                window.location.href = boton.getAttribute("url");
            }
            else
            {
                alert("Debes iniciar sesion para realizar una compra.");
            }
        });
    });
}

function VerificarAccionAgregarCarrito() 
{
    const botonesAgregarCarrito = document.querySelectorAll(".agregarCarrito");

    botonesAgregarCarrito.forEach(function(boton)
    {
        boton.addEventListener("click", function(event) 
        {
            event.preventDefault();
            
            let usuarios = DevolverUsuarios();
            let usuarioIniciado = BuscarUsuarioIniciado(usuarios);

            if(usuarioIniciado != null && usuarioIniciado.sesionIniciada)
            {
                alert("Se agrego al carrito.");
            }
            else
            {
                alert("Debes iniciar sesion para agregar al carrito.");
            }
        });
    });
}

VerificarAccionCompra();
VerificarAccionAgregarCarrito();