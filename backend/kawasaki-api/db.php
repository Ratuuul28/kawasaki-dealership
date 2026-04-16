<?php

$conn = new mysqli("localhost", "root", "", "kawasaki");

if ($conn->connect_error) {
    die("Connection failed");
}
?>