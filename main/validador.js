function VerificarNombreApellido(nombre, apellido)
{
    if (!/^[A-Za-z]+$/.test(nombre) || !/^[A-Za-z]+$/.test(apellido)) 
    {
        alert("Nombre y Apellido solo pueden contener letras.");
        return false;
    }
    else
    {
        if (nombre.length < 4 || nombre.length > 15) 
        {
            alert("Nombre debe contener entre 4 y 15 letras.");
            return false;
        }

        if (apellido.length < 4 || apellido.length > 15) 
        {
            alert("Apellido debe contener entre 5 y 15 letras.");
            return false;
        }
    }
    return true;
}

function VerificarResto(localidad, email, clave)
{
    if(!/^[A-Za-z]+$/.test(localidad) || (localidad.length < 5 || localidad.length > 15)) 
    {
        alert("Localidad solo puede contener letras y tener entre 5 y 15 caracteres");
        return false;
    }

    if(!/^[A-Za-z]+[A-Za-z0-9]*@gmail\.com$/.test(email)) 
    {
        alert("El email no cumple con el formato requerido: 'ejemplo@gmail.com'.");
        return false;
    }

    if(!/^[A-Za-z0-9]+$/.test(clave) || clave.length < 4) 
    {
        alert("Clave solo puede contener letras o numeros y tener entre 4 caracteres o mas.");
        return false;
    }
    return true;
}

function VerificarEntradas(nombre, apellido, localidad, email, clave)
{
    if(VerificarNombreApellido(nombre, apellido) == false) 
    {
        return false;
    }

    if(VerificarResto(localidad, email, clave) == false) 
    {
        return false;
    }
    return true;
}

function VerificarFormContacto(nombre, apellido, email, telefono)
{
    if(VerificarNombreApellido(nombre, apellido) == false) 
    {
        return false;
    }

    if(!/^[A-Za-z]+[A-Za-z0-9]*@gmail\.com$/.test(email)) 
    {
        alert("El email no cumple con el formato requerido: 'ejemplo@gmail.com'.");
        return false;
    }

    if(!/^[0-9]+$/.test(telefono) || (telefono.length < 10 || telefono.length > 10)) 
    {
        alert("Telefono solo puede contener tener 10 caracteres numericos.");
        return false;
    }
    return true;
}

function EnvioFormContacto()
{
    let frmContacto = document.querySelector("#contacto");

    frmContacto.addEventListener("submit", function(event) 
    { 
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;

        if(VerificarFormContacto(nombre, apellido, email, telefono) == true)
        {
            alert("Mensaje enviado con exito.");
        }
    });
}

EnvioFormContacto();