<?php
require_once 'database.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'] ?? null;
$password = $data['password'] ?? null;

if (!$email || !$password) {
    echo json_encode(["error" => "Missing required fields"]);
    http_response_code(400);
    exit;
}

$query = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $query);

if ($user = mysqli_fetch_assoc($result)) {
    if (password_verify($password, $user['password'])) {
        echo json_encode([
            "message" => "Login successful",
            "user" => [
                "id" => $user['id'],
                "username" => $user['username'],
                "email" => $user['email']
            ]
        ]);
        http_response_code(200);
    } else {
        echo json_encode(["error" => "Invalid email or password"]);
        http_response_code(400);
    }
} else {
    echo json_encode(["error" => "Invalid email or password"]);
    http_response_code(400);
}
?>