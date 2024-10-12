<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Update with your React app's URL
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

session_start();
session_destroy();
header('Location: /login');
exit;
?>
