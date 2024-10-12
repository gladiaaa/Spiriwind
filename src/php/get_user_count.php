<?php
include 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
$result = $conn->query("SELECT COUNT(*) AS count FROM users");
$row = $result->fetch_assoc();
echo json_encode($row);

$conn->close();
?>

