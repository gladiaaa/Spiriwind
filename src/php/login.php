<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

include 'db.php';


$rawData = file_get_contents("php://input");


$data = json_decode($rawData, true);

$username = $data['username'];
$password = $data['password'];

try {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        session_start();
        $_SESSION['user'] = $user;
        echo json_encode(['status' => 'success', 'redirect' => '/admin']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Identifiants invalides']);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erreur de base de données']);
}
?>
