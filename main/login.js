const btnRegistrarse = document.querySelector('input[value="Registrarse"]');
const btnCerrarSesion = document.querySelector('input[value="Cerrar Sesion"]');
const btnCancelar = document.getElementById("btnCancelar");
const frmLogin = document.querySelector(".frmLogin");
const frmRegistro = document.querySelector(".frmRegistro");

btnRegistrarse.addEventListener("click", function() {
    frmLogin.style.display = "none";
    frmRegistro.style.display = "block";
});

btnCancelar.addEventListener("click", function() {
    frmRegistro.style.display = "none";
    frmLogin.style.display = "block";
});

btnCerrarSesion.addEventListener("click", function() 
{
    let usuarios = DevolverUsuarios();
    let usuarioIniciado = BuscarUsuarioIniciado(usuarios);

    if(usuarioIniciado) 
    {
        usuarioIniciado.sesionIniciada = false;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Sesion cerrada correctamente.");
    } 
    else 
    {
        alert("No iniciaste ninguna sesion.");
    }
});

// ---------------------- Login Guardado ----------------------

function DevolverUsuarios()
{
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (usuarios == null || usuarios.length == 0) 
    {
        usuarios = [];
    } 
    return usuarios;
}

function BuscarUsuarioIniciado(usuarios) 
{
    return usuarios.find(function(usuario) {
        return usuario.sesionIniciada;
    });
}

function VerificarEmail(usuarios, email)
{
    let resultado = false;

    let emailExistente = usuarios.find(function(usuario) {
        return usuario.email == email;
    });
    console.log(emailExistente);

    if(emailExistente) 
    {
        resultado = true;
    }
    
    return resultado;
}

function Registrarse()
{
    frmRegistro.addEventListener("submit", function(event) 
    { 
        event.preventDefault();
        let usuarios = DevolverUsuarios();
        let nombre = document.getElementById("txtNombre").value;
        let apellido = document.getElementById("txtApellido").value;
        let localidad = document.getElementById("txtLocalidad").value;
        let email = document.getElementById("txtEmailRegistro").value;
        let clave = document.getElementById("txtClaveRegistro").value;

        if(VerificarEntradas(nombre, apellido, localidad, email, clave) == true)
        {
            let usuarioARegistrar = {
                nombre: nombre,
                apellido: apellido,
                localidad: localidad,
                email: email,
                clave: clave,
                fechaNacimiento: document.getElementById("txtFechaNacimiento").value,
                sesionIniciada: false
            };

            if(VerificarEmail(usuarios, usuarioARegistrar.email) == false)
            {
                usuarios.push(usuarioARegistrar);
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                alert("Registro exitoso.");
            }
            else
            {
                alert("Ese email ya esta siendo usado por otro usuario.");
            }
        }
    });
}

function IniciarSesion()
{
    frmLogin.addEventListener("submit", function(event) 
    {
        event.preventDefault();
        let usuarios = DevolverUsuarios();
        let email = document.getElementById("txtEmail").value;
        let clave = document.getElementById("txtClave").value;
    
        let usuarioEncontrado = usuarios.find(function(usuario) {
            return usuario.email == email && usuario.clave == clave;
        });

        if (usuarioEncontrado) 
        {
            let usuarioIniciado = BuscarUsuarioIniciado(usuarios);

            if(usuarioIniciado)
            {
                alert("Ya hay una sesion iniciada.");
            }
            else
            {
                usuarioEncontrado.sesionIniciada = true;
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                alert("Sesion iniciada correctamente.");
            }
        } 
        else 
        {
            alert("Email o contraseña incorrectos.");
        }
    });
}

/*
let otrosUsuarios = DevolverUsuarios();

if (otrosUsuarios != null && otrosUsuarios.length > 0) 
{
    console.log("Usuarios almacenados: ");
    
    otrosUsuarios.forEach(function(usuario) 
    {
        console.log("Nombre: ", usuario.nombre);
        console.log("Email: ", usuario.email);
        console.log("Sesion Iniciada: ", usuario.sesionIniciada);
    });
}
*/
Registrarse();
IniciarSesion();