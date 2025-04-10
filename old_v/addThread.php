<?php
require_once __DIR__ . '/database.php';
require_once __DIR__ . '/jwt.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

// Pobranie tokena z nagłówka
$headers = getallheaders();
if (!isset($headers['Authorization'])) {
    http_response_code(401);
    echo json_encode(["error" => "Unauthorized"]);
    exit;
}

$token = str_replace('Bearer ', '', $headers['Authorization']);
try {
    $decoded = JWT::decode($token, 'your_secret_key', ['HS256']);
    $username = $decoded->username; // Pobranie nazwy użytkownika z tokena
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(["error" => "Invalid token"]);
    exit;
}

// Sprawdzenie, czy wymagane dane są obecne
if (!isset($data['title'])) {
    http_response_code(400);
    echo json_encode(["error" => "Thread title is required"]);
    exit;
}

try {
    // Dodanie nowego wątku do bazy danych
    $stmt = $conn->prepare("INSERT INTO threads (title, username) VALUES (:title, :username)");
    $stmt->bindParam(':title', $data['title']);
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    // Przygotowanie odpowiedzi z nowym wątkiem
    $newThread = [
        "id" => $conn->lastInsertId(),
        "title" => $data['title'],
        "username" => $username,
        "comments" => []
    ];

    echo json_encode($newThread);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>