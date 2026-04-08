<?php

// 🔥 SHOW ERRORS (for debugging)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 🔥 CORS HEADERS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// 🔥 HANDLE PREFLIGHT REQUEST
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 🔥 DATABASE CONNECTION
$conn = new mysqli("localhost", "root", "", "kawasaki");

if ($conn->connect_error) {
    die("DB Connection Failed: " . $conn->connect_error);
}

// 🔥 GET JSON DATA
$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// 🔥 CHECK EMPTY
if (!$email || !$password) {
    echo json_encode([
        "status" => "error",
        "message" => "Email or password missing"
    ]);
    exit();
}

// 🔥 QUERY
$sql = "SELECT * FROM admins WHERE email = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => "SQL Error"
    ]);
    exit();
}

$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $admin = $result->fetch_assoc();

    if (password_verify($password, $admin['password'])) {
        echo json_encode([
            "status" => "success",
            "message" => "Login successful"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Invalid password"
        ]);
    }
} else {
    echo json_encode([
        "status" => "error",
        "message" => "User not found"
    ]);
}