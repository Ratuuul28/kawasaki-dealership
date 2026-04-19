<?php
$host = "ssql100.infinityfree.com";
$user = "if0_41680672";
$password = "ratul@mail28";
$database = "if0_41680672_kawasaki";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>