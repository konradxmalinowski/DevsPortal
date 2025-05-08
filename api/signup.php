<?php
require_once 'database.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username'], $data['email'], $data['password'], $data['phone'])) {
    echo json_encode(["error" => "Missing required fields"]);
    http_response_code(400);
    exit;
}

$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);
$phone = $data['phone'];

$query = "INSERT INTO users (username, email, password, phone) VALUES ('$username', '$email', '$password', '$phone')";

if (mysqli_query($conn, $query)) {
    echo json_encode(["message" => "User registered successfully"]);
    http_response_code(201);
} else {
    echo json_encode(["error" => "Failed to register user"]);
    http_response_code(500);
}
?>