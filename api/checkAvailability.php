<?php
require_once __DIR__ . '/database.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

try {
    $data = json_decode(file_get_contents("php://input"), true) ?? [];
    $type = $data['type'] ?? null;
    $value = $data['value'] ?? null;

    if (!$type || !$value || !in_array($type, ['username', 'email', 'phone'], true)) {
        throw new Exception("Invalid or missing fields: type or value");
    }

    $query = "SELECT COUNT(*) FROM users WHERE $type = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $value);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();

    echo json_encode(["available" => $count == 0]);
    http_response_code(200);

    $stmt->close();
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}
?>