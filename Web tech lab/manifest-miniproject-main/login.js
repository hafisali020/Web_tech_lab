function submitLoginForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && emailInput.value === storedUserData.email && passwordInput.value === storedUserData.password) {
        // If email and password match, navigate to the home.html page
        window.location.href = 'home.html';
    } else {
        // If email and password do not match, display an error message
        alert('Email or password incorrect');
    }
}
