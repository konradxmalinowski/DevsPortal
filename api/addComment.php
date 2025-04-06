<?php
require_once __DIR__ . '/database.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['threadId'], $data['comment'])) {
    http_response_code(400);
    echo json_encode(["error" => "Thread ID and comment are required"]);
    exit;
}

try {
    $stmt = $conn->prepare("INSERT INTO comments (thread_id, comment) VALUES (:threadId, :comment)");
    $stmt->bindParam(':threadId', $data['threadId']);
    $stmt->bindParam(':comment', $data['comment']);
    $stmt->execute();

    $stmt = $conn->prepare("SELECT * FROM threads WHERE id = :id");
    $stmt->bindParam(':id', $data['threadId']);
    $stmt->execute();
    $updatedThread = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = $conn->prepare("SELECT comment FROM comments WHERE thread_id = :id");
    $stmt->bindParam(':id', $data['threadId']);
    $stmt->execute();
    $updatedThread['comments'] = $stmt->fetchAll(PDO::FETCH_COLUMN);

    echo json_encode($updatedThread);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>