<?php
// Display errors for debugging
header("Access-Control-Allow-Origin: http://localhost:3000"); // Update with your React app's URL
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include database connection
include 'db.php';

try {
    // Get the raw POST data
    $data = json_decode(file_get_contents('php://input'), true);

    // Check if data is correctly received
    if (!isset($data['username'], $data['email'], $data['password'])) {
        throw new Exception("Incomplete data received");
    }

    $username = $data['username'];
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_BCRYPT);

    // Prepare SQL statement to insert new user
    $stmt = $conn->prepare("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, 'admin')");
    $stmt->bind_param("sss", $username, $email, $password);

    // Execute the statement and check for errors
    if ($stmt->execute()) {
        echo "Admin user created successfully.";
    } else {
        throw new Exception("Error: " . $stmt->error);
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();

} catch (Exception $e) {
    echo "Exception: " . $e->getMessage();
}
?>
