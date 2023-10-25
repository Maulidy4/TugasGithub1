const form = document.getElementById('form-registrasi');
const nmLengkap = document.getElementById('nmLengkap');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.innerText = message;
} 

function hideError(inputId) {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.innerText = '';
}

form.addEventListener('submit', function (obj) {
    obj.preventDefault();

    if(nmLengkap.value =='') {
        showError('nmLengkap', 'Nama Lengkap Harus Di Isi');
    }else{
        hideError('nmLengkap');
    }

    if(email.value =='') {
        showError('email', 'Email Harus Di Isi');
    }else{
        hideError('email');
    }

    if(password.value =='') {
        showError('password', 'Password Hrus Di Isi');    
    } else if (password.value.length <6){
        showError ('password', 'password minimal enam karakter')
    }
    
    else{
        hideError('password');
    }

});