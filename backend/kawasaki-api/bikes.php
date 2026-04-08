<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "kawasaki");

// Check connection
if ($conn->connect_error) {
    die("DB Connection failed: " . $conn->connect_error);
}

// Query
$sql = "SELECT * FROM bikes";
$result = $conn->query($sql);

if (!$result) {
    die("Query failed: " . $conn->error);
}

$bikes = [];

while ($row = $result->fetch_assoc()) {
    $bikes[] = $row;
}

echo json_encode($bikes);
?>