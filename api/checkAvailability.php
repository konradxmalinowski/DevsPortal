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

    $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE $type = :value");
    $stmt->execute([':value' => $value]);

    echo json_encode(["available" => $stmt->fetchColumn() == 0]);
    http_response_code(200);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}
?>