<?php
require_once __DIR__ . '/database.php'; // Zmieniono ścieżkę na bezpośrednią

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['email'], $data['password'])) {
        throw new Exception("Missing required fields: email or password");
    }

    // Sprawdzenie, czy użytkownik istnieje
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $data['email']);
    $stmt->execute();

    if ($stmt->rowCount() === 0) {
        throw new Exception("Invalid email or password");
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Weryfikacja hasła
    if (!password_verify($data['password'], $user['password'])) {
        throw new Exception("Invalid email or password");
    }

    // Zwrócenie sukcesu logowania
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