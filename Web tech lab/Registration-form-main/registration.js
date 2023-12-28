function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Simple email validation using a regular expression
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
        alert("Invalid email address.");
        return false;
    }

    // Simple phone number validation (10 digits)
    var phoneRegex = /^\d{10}$/;
    if (!phoneNumber.match(phoneRegex)) {
        alert("Invalid phone number. Please enter a 10-digit number.");
        return false;
    }

    // Assuming you have a function to save the data in a database here
    saveDataToDatabase(firstName, lastName, email, phoneNumber);

    // Prevent form submission since we're not doing the server-side processing here
    return false;
}

function saveDataToDatabase(firstName, lastName, email, phoneNumber) {
    // You would typically use an AJAX request or form submission to send this data to a server-side script (e.g., PHP or Node.js) to interact with a database.
    // Here, we'll just log the data to the console.
    console.log("Data to be saved to the database:");
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Phone Number: " + phoneNumber);
}
