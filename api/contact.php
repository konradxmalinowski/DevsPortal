<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "malinowski.konrad45@gmail.com";

    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    $subject = "New Contact Message from $name";
    $message = "You've received a new message:\n\n"
        . "Name: $name\n"
        . "Phone: $phone\n"
        . "Email: $email\n"
        . "Message: $message";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Error sending message.";
    }
}
?>