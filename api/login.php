<?php
require_once __DIR__ . '/database.php';


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['email'], $data['password'])) {
        throw new Exception("Missing required fields: email or password");
    }

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $data['email']);
    $stmt->execute();

    if ($stmt->rowCount() === 0) {
        throw new Exception("Invalid email or password");
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!password_verify($data['password'], $user['password'])) {
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
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
    http_response_code(400);
}
?>