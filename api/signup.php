<?php
require_once __DIR__ . '/database.php';

try {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['username'], $data['email'], $data['password'], $data['phone'])) {
        throw new Exception("Missing required fields: username, email, password or phone");
    }

    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];
    $phone = $data['phone'];

    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (username, email, password, phone) VALUES (:username, :email, :password, :phone)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $hashedPassword);
    $stmt->bindParam(':phone', $phone);
    $stmt->execute();

    echo json_encode(["message" => "User registered successfully"]);
    http_response_code(201);
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
    http_response_code(400);
}
?>