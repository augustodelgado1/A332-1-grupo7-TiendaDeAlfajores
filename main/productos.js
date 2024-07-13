const productos = [
    {
        id: 1,
        nombre: "Alfajor De Chocolate",
        img: "./img/productos/alfajor-de-chocolate.png",
        precio: 400,
        descripcion: "Delicioso alfajor relleno de suave y cremoso dulce de leche, cubierto con una capa de chocolate que se derrite en la boca. ¡Un clásico irresistible!"
    },
    {
        id: 2,
        nombre: "Mini Alfajores De Chocolate",
        img: "./img/productos/mini-alfajores-de-chocolate.png",
        precio: 400,
        descripcion: "Pequeños bocados de placer, rellenos de dulce de leche y cubiertos con una fina capa de chocolate. ¡Perfectos para cualquier antojo!"
    },
    {
        id: 4,
        nombre: "Alfajor Blanco",
        img: "./img/productos/alfajor-blanco.png",
        precio: 400,
        descripcion: "Delicioso alfajor relleno de suave y cremoso dulce de leche, cubierto con una capa de chocolate que se derrite en la boca. ¡Un clásico irresistible!"
    },
    {
        id: 5,
        nombre: "Alfajor De Maicena",
        img: "./img/productos/alfajor-de-maicena.png",
        precio: 400,
        descripcion: "Delicioso alfajor relleno de suave y cremoso dulce de leche, cubierto con una capa de chocolate que se derrite en la boca. ¡Un clásico irresistible!"
    },
    {
        id: 6,
        nombre: "Alfajor Vegano",
        img: "./img/productos/alfajor-vegano.png",
        precio: 400,
        descripcion: "Delicioso alfajor relleno de suave y cremoso dulce de leche, cubierto con una capa de chocolate que se derrite en la boca. ¡Un clásico irresistible!"
    },
    {
        id: 7,
        nombre: "Alfajor De Fruta",
        img: "./img/productos/alfajor-de-fruta.png",
        precio: 500,
        descripcion: "Delicioso alfajor relleno de suave y cremoso dulce de leche, cubierto con una capa de chocolate que se derrite en la boca. ¡Un clásico irresistible!"
    }
]
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