const btnRegistrarse = document.querySelector('input[value="Registrarse"]');
const btnCancelar = document.getElementById('btnCancelar');
const frmLogin = document.querySelector('.frmLogin');
const frmRegistro = document.querySelector('.frmRegistro');

btnRegistrarse.addEventListener('click', function() {
    frmLogin.style.display = 'none';
    frmRegistro.style.display = 'block';
});

btnCancelar.addEventListener('click', function() {
    frmRegistro.style.display = 'none';
    frmLogin.style.display = 'block';
});