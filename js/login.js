let pssBtn = document.getElementById('btnPassword');
let inputPassword = document.getElementById('inptPassword');
let login = document.getElementById('form_login');
let inputEmail = document.getElementById('inptEmail');

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

pssBtn.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        pssBtn.innerHTML = '<i class="far fa-eye"></i>';
    } else {
        inputPassword.type = 'password';
        pssBtn.innerHTML = '<i class="far fa-eye-slash"></i>';
    }
})

login.onsubmit = (e) => {
    e.preventDefault();
    if (inputEmail.value === '' || inputPassword.value === '') {
        alert('Por favor, llene todos los campos');
    } else if (!emailRegex.test(inputEmail.value)) {
        alert('Por favor, ingrese un correo válido');
    } else {
        alert('Bienvenido');
    }
}