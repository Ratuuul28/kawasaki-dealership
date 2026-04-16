<?php
// ✅ CORS HEADERS (VERY IMPORTANT)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
f ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
// ✅ Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ✅ DB CONNECTION
$conn = new mysqli("localhost", "root", "", "kawasaki");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed"]);
    exit();
}

// ✅ GET JSON DATA
$data = json_decode(file_get_contents("php://input"), true);

// ✅ VALIDATION
if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit();
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$bike_name = $data['bike_name'] ?? '';
$message = $data['message'] ?? '';

// ✅ SIMPLE VALIDATION
if ($name == '' || $email == '' || $phone == '' || $bike_name == '') {
    echo json_encode(["status" => "error", "message" => "Missing fields"]);
    exit();
}

// ✅ INSERT QUERY (SAFE)
$stmt = $conn->prepare("INSERT INTO test_rides (name, email, phone, bike_name, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $phone, $bike_name, $message);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Ride booked successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to save"]);
}

$stmt->close();
$conn->close();
?>