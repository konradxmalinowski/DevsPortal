<?php
require_once __DIR__ . '/database.php';

try {
    $data = json_decode(file_get_contents("php://input"), true) ?? [];
    $email = $data['email'] ?? null;
    $password = $data['password'] ?? null;

    if (!$email || !$password) {
        throw new Exception("Missing required fields: email or password");
    }

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    $user = $result->fetch_assoc();
    if (!$user || !password_verify($password, $user['password'])) {
        throw new Exception("Invalid email or password");
    }

    echo json_encode([
        "message" => "Login successful",
        "user" => [
            "id" => $user['id'],
            "username" => $user['username'],
            "email" => $user['email']
        ]
    ]);
    http_response_code(200);

    $stmt->close();
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}
?>