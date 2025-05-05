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

    $stmt = $conn->prepare("INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $email, $hashedPassword, $phone);
    $stmt->execute();

    echo json_encode(["message" => "User registered successfully"]);
    http_response_code(201);

    $stmt->close();
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
    http_response_code(400);
}
?>