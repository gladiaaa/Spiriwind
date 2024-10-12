<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "DELETE") {

    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['id'])) {
        echo json_encode(["status" => "error", "message" => "Post ID is missing"]);
        exit();
    }

    $postId = $data['id'];

    $servername = "62.210.219.124";
    $username = "usersite";
    $password = "irFKj4Rr@ZJ14l31";
    $dbname = "site";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Delete the post
    $sql = "DELETE FROM posts WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $postId);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Post deleted successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to delete post"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
