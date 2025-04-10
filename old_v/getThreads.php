<?php
require_once __DIR__ . '/database.php';

header("Content-Type: application/json");

try {
    $stmt = $conn->prepare("SELECT threads.id, threads.title, threads.username AS thread_username,
        GROUP_CONCAT(JSON_OBJECT('username', comments.username, 'text', comments.comment) SEPARATOR '||') AS comments
        FROM threads
        LEFT JOIN comments ON threads.id = comments.thread_id
        GROUP BY threads.id");
    $stmt->execute();
    $threads = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($threads as &$thread) {
        $thread['comments'] = $thread['comments'] ? array_map('json_decode', explode('||', $thread['comments'])) : [];
    }

    echo json_encode($threads);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>