<?php
require_once 'database.php';

$data = json_decode(file_get_contents("php://input"), true);

$type = $data['type'] ?? null;
$value = $data['value'] ?? null;

if (!$type || !$value || !in_array($type, ['username', 'email', 'phone'])) {
    echo json_encode(["error" => "Invalid or missing fields"]);
    http_response_code(400);
    exit;
}

$query = "SELECT COUNT(*) AS count FROM users WHERE $type = '$value'";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($result);

echo json_encode(["available" => $row['count'] == 0]);
http_response_code(200);
?>