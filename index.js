window.addEventListener('DOMContentLoaded', init);

let message;
let form;

function init() {
    form = document.getElementById('signUpForm');
    message = document.createElement('span');
    message.classList.add('msgError');

    form.oninput = function(event) {
        checkOnValidForm(event);

        checkButton(form.elements);
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        let obj = {};

        [].forEach.call(form.elements, (item) => {
            if(item.type != "submit") {
                obj[item.name] = item.value;
            }
        })

        console.log(obj);
    }
}

function checkButton(elements) {
    let button = document.getElementById('signUpBtn');

    let hasSomeEmpty = [].some.call(elements, (item) => {
        return item.value.length == 0;
    })

    let hasSomeError = [].some.call(elements, (item) => {
        return item.classList.contains('error');
    })

    if (hasSomeEmpty || hasSomeError) {
        button.setAttribute("disabled", "");
    } else {
        button.removeAttribute("disabled");
    }
}

function checkOnValidForm(event) {
    if(!checkOnEmpty(event)) {
        switch (event.target.name) {
            case 'email': {
                if(!checkOnValidEmail(event.target.value)) {
                    event.target.classList.add('error');
                    message.textContent = "Entered email does not fit to the format";
                    message.style = 'display: block';
                    event.target.after(message);
                } else {
                    event.target.classList.remove('error');
                    message.style = 'display: none';
                }

                break;
            }
            case 'name': {
                if(!checkOnValidName(event.target.value)) {
                    event.target.classList.add('error');
                    message.textContent = "Entered name is not correct";
                    message.style = 'display: block';
                    event.target.after(message);
                } else {
                    event.target.classList.remove('error');
                    message.style = 'display: none';
                }

                break;
            }
            case 'rePassword': {
                if(!checkOnConfirmPassword(event.target.value)) {
                    event.target.classList.add('error');
                    message.textContent = "Entered password does not match";
                    message.style = 'display: block';
                    event.target.after(message);
                } else {
                    event.target.classList.remove('error');
                    message.style = 'display: none';
                }

                break;
            }
        }
    }
}

function checkOnConfirmPassword(rePassword) {
    let valid = true;
    let password = '';

    [].find.call(form.elements, (item) => {
        if(item.name == "password") {
            password = item.value;
        } 
    });

    if(rePassword != password) {
        valid = false;
    }

    return valid;
}

function checkOnValidEmail(email) {
    let valid = true;
    let exampleOfValidEmail = /^([a-zA-Z0-9_\.\-]{3,15})+\@(([a-zA-Z0-9\-]{3,10})+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!exampleOfValidEmail.test(email)) {
        valid = false;
    }

    return valid;
}

function checkOnValidName(name) {
    let valid = true;
    let exampleOfValidEmail = /^[a-zA-Z0-9_\.\-]{2,15}$/;

    if(!exampleOfValidEmail.test(name)) {
        valid = false;
    }

    return valid;
}

function checkOnEmpty(event) {
    let empty = true;

    if (!event.target.value.length) {
        event.target.classList.add('error');
        message.textContent = 'This field have to be filled!';
        message.style = 'display: block';
        event.target.after(message);
    } else {
        empty = false;

        event.target.classList.remove('error');
        message.style = 'display: none';
    }

    return empty;
}

