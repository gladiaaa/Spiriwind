<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:3000"); // Update with your React app's URL
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

include 'db.php'; // Ensure this file includes your database connection setup

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'];
    $password = $data['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = [
            'username' => $user['username'],
            'role' => $user['role'] 
        ];
        echo json_encode(['success' => true, 'user' => $_SESSION['user']]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
    }
} else if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $response = ["user" => null];

    if (isset($_SESSION['user'])) {
        $response["user"] = $_SESSION['user'];
    }

    echo json_encode($response);
}
?>
