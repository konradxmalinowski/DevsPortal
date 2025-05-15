<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        throw new Exception("Invalid request method.");
    }

    $data = json_decode(file_get_contents("php://input"), true);

    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var($data['email']);
    $phone = htmlspecialchars(trim($data['phone']));
    $message = htmlspecialchars(trim($data['message']));

    $to = "devsportal@m4linaa.ct8.pl";
    $subject = "Message from Contact Page";

    $headers = "From: devsportal@m4linaa.ct8.pl\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n";

    if (!mail($to, $subject, $body, $headers)) {
        throw new Exception("Error sending the message.");
    }

    echo json_encode(["success" => true, "message" => "✅ Message has been sent."]);
} catch (Exception $e) {
    error_log($e->getMessage());
    echo json_encode(["success" => false, "message" => "❌ " . $e->getMessage()]);
}
?>