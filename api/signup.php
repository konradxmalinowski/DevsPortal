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

    if (!isset($data['username'], $data['email'], $data['password'])) {
        throw new Exception("Missing required fields: username, email, or password");
    }

    // Walidacja hasła
    $password = $data['password'];
    $passwordPattern = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/';

    if (!preg_match($passwordPattern, $password)) {
        throw new Exception("Password must be at least 8 characters long, include at least 1 number, 1 lowercase letter, 1 uppercase letter, and 1 special character");
    }

    // Sprawdzenie, czy użytkownik już istnieje
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $data['email']);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        throw new Exception("User with this email already exists");
    }

    // Hashowanie hasła
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Wstawianie użytkownika do bazy danych
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $stmt->bindParam(':username', $data['username']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':password', $hashedPassword);
    $stmt->execute();

    echo json_encode(["message" => "User registered successfully"]);
    http_response_code(201);
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
    http_response_code(400);
}
?>