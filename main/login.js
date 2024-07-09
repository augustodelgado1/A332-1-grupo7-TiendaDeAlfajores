const btnRegistrarse = document.querySelector('input[value="Registrarse"]');
const btnCancelar = document.getElementById('btnCancelar');
const txtFechaDeNaciminto = document.getElementById('txtFechaNacimiento')
const frmLogin = document.querySelector('.login');
const frmRegistro = document.querySelector('.registrarse');
const fechaActual = new Date();

txtFechaDeNaciminto.addEventListener('change', function() {
 
    const fechaIngresada = new Date(txtFechaDeNaciminto.value);
    
    
    if (fechaIngresada >= fechaActual) {
        txtFechaDeNaciminto.value = '';
    
    }
});



btnRegistrarse.addEventListener('click', function() {
    frmLogin.style.display = 'none';
    frmRegistro.style.display = 'block';
    
});

btnCancelar.addEventListener('click', function() {
    frmRegistro.style.display = 'none';
    frmLogin.style.display = 'block';
});