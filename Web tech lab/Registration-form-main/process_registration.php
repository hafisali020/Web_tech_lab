<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];

   
    $host = "127.0.0.1";
    $username = ""; 
    $password = ""; 
    $database = "registration"; 

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO form (name, email, phoneNumber) VALUES ('$name', '$email', '$phoneNumber')";

    if ($conn->query($sql) === TRUE) {

        header("Location: success.html"); 
    } else {
        
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
