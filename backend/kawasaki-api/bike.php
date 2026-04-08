<?php

// ✅ CORS fix
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

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