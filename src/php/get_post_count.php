<?php
include 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000"); // Update with your React app's URL
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

try {
    $stmt = $pdo->query("SELECT COUNT(*) as user_count FROM users");
    $count = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($count);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
