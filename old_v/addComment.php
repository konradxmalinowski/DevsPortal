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

if (!isset($data['threadId'], $data['comment'])) {
    http_response_code(400);
    echo json_encode(["error" => "Thread ID and comment are required"]);
    exit;
}

try {
    $stmt = $conn->prepare("INSERT INTO comments (thread_id, comment, username) VALUES (:threadId, :comment, :username)");
    $stmt->bindParam(':threadId', $data['threadId']);
    $stmt->bindParam(':comment', $data['comment']);
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    $stmt = $conn->prepare("SELECT * FROM threads WHERE id = :id");
    $stmt->bindParam(':id', $data['threadId']);
    $stmt->execute();
    $updatedThread = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = $conn->prepare("SELECT username, comment FROM comments WHERE thread_id = :id");
    $stmt->bindParam(':id', $data['threadId']);
    $stmt->execute();
    $updatedThread['comments'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($updatedThread);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>