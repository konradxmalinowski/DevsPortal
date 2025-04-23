<?php
require_once __DIR__ . '/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['type'], $data['value'])) {
            throw new Exception("Missing required fields: type or value");
        }

        $type = $data['type'];
        $value = $data['value'];

        if (!in_array($type, ['username', 'email', 'phone'], true)) {
            throw new Exception("Invalid type. Allowed values are 'username', 'email', or 'phone'");
        }

        $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE $type = :value");
        $stmt->bindParam(':value', $value);
        $stmt->execute();

        $count = $stmt->fetchColumn();

        echo json_encode(["available" => $count == 0]);
        http_response_code(200);
    } catch (Exception $e) {
        echo json_encode(["error" => $e->getMessage()]);
        http_response_code(400);
    }
} else {
    http_response_code(405);
}
?>