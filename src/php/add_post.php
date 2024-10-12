<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

include 'db.php';

if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST['username']) && isset($_FILES['image'])){
    $title = $_POST['title'];
    $description = $_POST['description'];
    $username = $_POST['username'];
    $image = $_FILES['image']['name'];
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        try {
            $stmt = $pdo->prepare("INSERT INTO posts (title, description, username, image_url) VALUES (?, ?, ?, ?)");
            $stmt->execute([$title, $description, $username, $image]);
            echo json_encode(['status' => 'success']);
        } catch (PDOException $e) {
            echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to upload image']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Missing required fields']);
}
?>
