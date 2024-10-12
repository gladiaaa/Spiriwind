<?php
include 'db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$response = ["status" => "error", "message" => "User update failed"];

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['id']) && isset($data['username']) && isset($data['email']) && isset($data['role'])) {
    $id = $data['id'];
    $username = $data['username'];
    $email = $data['email'];
    $role = $data['role'];

    $sql = "UPDATE users SET username = '$username', email = '$email', role = '$role' WHERE id = $id";

    if (isset($data['password']) && !empty($data['password'])) {
        $password = password_hash($data['password'], PASSWORD_DEFAULT);
        $sql = "UPDATE users SET username = '$username', email = '$email', password = '$password', role = '$role' WHERE id = $id";
    }

    if ($conn->query($sql) === TRUE) {
        $response = ["status" => "success", "message" => "User updated successfully"];
    }
}

echo json_encode($response);
?>
