<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// DB connection
$conn = new mysqli("sql100.infinityfree.com", "if0_41680672", "ratulmail28", "if0_41680672_kawasaki");

// Check connection
if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "error" => "DB Connection Failed",
        "details" => $conn->connect_error
    ]);
    exit();
}

// Get form data (FormData use ho raha hai)
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Validation
if ($name == "" || $email == "" || $message == "") {
    echo json_encode([
        "status" => "error",
        "error" => "Empty fields"
    ]);
    exit();
}

// Escape data
$name = $conn->real_escape_string($name);
$email = $conn->real_escape_string($email);
$message = $conn->real_escape_string($message);

// Insert query
$sql = "INSERT INTO contact_messages (name, email, message) 
        VALUES ('$name', '$email', '$message')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode([
        "status" => "error",
        "db_error" => $conn->error
    ]);
}

$conn->close();
?>