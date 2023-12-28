// validation.js

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById('email');

    if (emailRegex.test(email)) {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        return true;
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        return false;
    }
}
