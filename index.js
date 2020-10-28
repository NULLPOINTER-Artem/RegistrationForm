window.addEventListener('DOMContentLoaded', init);

let signUpBtn = document.getElementById('signUpBtn');

function init() {
    let form = document.getElementById('signUpForm');
    signUpBtn = document.getElementById('signUpBtn');

    signUpBtn.addEventListener('submit', );

    form.email.oninput = checkFormOnValid(form.email);
    form.name.oninput = checkFormOnValid(form.name);
    form.password.oninput = checkFormOnValid(form.password);
    form.rePassword.oninput = checkFormOnValid(form.rePassword);
}

function showMessageError(targetElement, error) {
    switch(targetElement.name) {
        case 'email': {
            error.textContent = 'This input should not be empty and fit to format of email!';
            error.style = 'display: block';
            break;
        }
        case 'name': {
            error.textContent = 'This input should not be empty!'
            error.style = 'display: block';
            break;
        }
        case 'password': {
            error.textContent = 'This input should not be empty!'
            error.style = 'display: block';
            break;
        }
        case 'rePassword': {
            error.textContent = 'This input should not be empty and repeat above entered the password!'
            error.style = 'display: block';
            break;
        }
    }
}

function hideMessageError(targetElement, error) {
    switch (targetElement.name) {
        case 'email': {
            error.style = 'display: none';
            break;
        }
        case 'name': {
            error.style = 'display: none';
            break;
        }
        case 'password': {
            error.style = 'display: none';
            break;
        }
        case 'rePassword': {
            error.style = 'display: none';
            break;
        }
    }
}

function checkFormOnValid(targetElement) {
    let error = document.createElement('span');
    error.classList.add('msgError');
    targetElement.after(error);

    return function() {
        if (targetElement.value.length == 0) {
            targetElement.classList.add('error');
            signUpBtn.setAttribute("disabled", "");

            showMessageError(targetElement, error);
        } else {
            targetElement.classList.remove('error');
            signUpBtn.removeAttribute("disabled");

            hideMessageError(targetElement, error);
        }
    }
}