<?php

header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "kawasaki");

$sql = "SELECT * FROM test_rides ORDER BY id DESC";
$result = $conn->query($sql);

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);