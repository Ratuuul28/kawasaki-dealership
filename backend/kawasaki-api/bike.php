<?php

// ✅ CORS fix
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");{
    http_response_code(200);
    exit();
}
// ✅ DB connection
$conn = new mysqli("localhost", "root", "", "kawasaki");

// ❌ Agar connection fail ho
if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed"]);
    exit();
}

// ✅ ID check
if (!isset($_GET['id'])) {
    echo json_encode(["error" => "No ID provided"]);
    exit();
}

$id = intval($_GET['id']); // safety

// ✅ Query
$sql = "SELECT * FROM bikes WHERE id = $id";
$result = $conn->query($sql);

// ✅ Data check
if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(["error" => "Bike not found"]);
}

$conn->close();

?>