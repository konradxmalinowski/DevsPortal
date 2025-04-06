<?php
require_once __DIR__ . '/database.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

// Sprawdzenie, czy wymagane dane są obecne
if (!isset($data['title'], $data['username'])) {
    http_response_code(400);
    echo json_encode(["error" => "Thread title and username are required"]);
    exit;
}

try {
    // Dodanie nowego wątku do bazy danych
    $stmt = $conn->prepare("INSERT INTO threads (title, username) VALUES (:title, :username)");
    $stmt->bindParam(':title', $data['title']);
    $stmt->bindParam(':username', $data['username']);
    $stmt->execute();

    // Przygotowanie odpowiedzi z nowym wątkiem
    $newThread = [
        "id" => $conn->lastInsertId(),
        "title" => $data['title'],
        "username" => $data['username'],
        "comments" => []
    ];

    echo json_encode($newThread);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>