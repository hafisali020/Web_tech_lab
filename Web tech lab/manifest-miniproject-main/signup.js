function submitSignupForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Validate email before storing the data
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Store user data in localStorage
    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Display a pop-up message
    alert('Your account is created');

    // Navigate to login page
    window.location.href = 'index.html';
}
