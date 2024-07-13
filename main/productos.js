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

function RellenarCorazon()
{
    const btnFavorito = document.querySelector(".btn-favorito i.fa-regular.fa-heart");
    
    btnFavorito.addEventListener("click", function(event) 
    {
        event.preventDefault(); 
        btnFavorito.classList.toggle("fa-regular");
        btnFavorito.classList.toggle("fas");
    });
}

//VerificarAccionCompra();
VerificarAccionAgregarCarrito();
RellenarCorazon();