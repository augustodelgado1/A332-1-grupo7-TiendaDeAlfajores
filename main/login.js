const btnRegistrarse = document.querySelector('input[value="Registrarse"]');
const btnCancelar = document.getElementById('btnCancelar');
const btnIniciarSesion = document.getElementById('btnIniciarSesion');
const frmLogin = document.querySelector('.login');
const frmRegistro = document.querySelector('.registrarse');

const txtEmail  = document.getElementById('txtEmail');
const txtClave  = document.getElementById('txtClave');
const txtFechaDeNaciminto = document.querySelector('#txtFechaNacimiento')
const fechaActual = new Date();


// Formatear la fecha en el formato YYYY-MM-DD
const añoActual = fechaActual.getFullYear();
const mesActual = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 al mes ya que getMonth() devuelve el mes comenzando desde 0
const diaActual = fechaActual.getDate().toString().padStart(2, '0');
const fechaMaxima = `${añoActual}-${mesActual}-${diaActual}`;


txtFechaDeNaciminto.setAttribute('max',fechaMaxima); 


btnIniciarSesion.addEventListener('click',
function()
{
    const data =
    {
        emailIngresado: txtEmail.value,
        claveIngresada: txtClave.value
    }

   
}


);




// console.log(frmRegistro.childNodes())

btnRegistrarse.addEventListener('click', function() {
    frmLogin.style.display = 'none';
    frmRegistro.style.display = 'block';
    
    
});

btnCancelar.addEventListener('click', function() {
    frmRegistro.style.display = 'none';
    frmLogin.style.display = 'block';
});


/*
  FUNCIONES 


--- QuerySelector() -----

setAttribute(atributo,valor) Settea un atributo de un selector

removeAttribute(atributo) le quita el valor a un atributo

toggleAttribute('disabled') Activa un atributo booleano

hasAttribute('disabled') //Me trae el estado de un atributo booleano


--- PARA CREAR UN ELEMENTO ---

--- document.createElement() ----


document.createElement(tipo de elemento que queremos crear)

Ejemplo

document.createElement('img'); Devuelve una imagen


--- document.createTextNode() -----

document.createElement(texto a insertar)

Ejemplo

$h1 = document.getElementsByTagName('h1');
const $texto document.createTextNode('Hola Mundo')


$h1.appendChild($texto)


-- PARA AGREGARLE UN ELEMENTO A UN SELECTOR ----

Si el objeto esta en memoria ()

appendChild(elemento);

Ejemplo 

$div = document.getElementById('contenedor');
$imagen = document.createElement('img'); 

div.appendChild($imagen)

---- prepand() ---


PARA AGREGAR AL PRINCIPIO , (COMO PRIMER HIJO)

Ejemplo:

$div = document.getElementById('contenedor');
$imagen = document.createElement('img'); 


div.prepand($imagen)

----- before() ------ 

PARA Agregarlo Antes del selctor (por afuera)


------ after() ------

PARA Agregarlo Despues del selctor (por afuera)

--- insert before





------------------------------ PROPIEDADES ------------------------

----- document.getElementById() -----

--- innerHTML --
innerHTML - EL html que esta adentro

con esto podemos insertar codigo html dentro de un selector

Ejemplo

$div = document.getElementById('contenedor');

$div.innerHTML = "<img src='...' />"

Otra opcion 

let url = "..."
let alt = "imagen"

$div.innerHTML = "<img src=${url} alt = ${alt} />"


--- innerText --


on esto podemos insertar texto plano dentro de un selector

---firstChild --

es una propiedad que pertenece a cualquier elemento del DOM en JavaScript. Esta propiedad devuelve el primer nodo hijo del elemento especificado. Puede ser cualquier tipo de nodo: un elemento HTML, un nodo de texto, un comentario, etc.

*/

