window.addEventListener('DOMContentLoaded', init);

function init() {
    let form = document.getElementById('signUpForm');

    form.email.oninput = function() {
        console.log(form.email.value.length);
        if (form.email.value.length == 0) {
            form.email.classList.add('error')
        } else {
            form.email.classList.remove('error');
        }
    }
}