<?php

$host = 'locolhost';
$user = 'root';
$pass = 'root';
$db = 'aznm';
$charset = 'utf8';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
    $pdo = new PDO('mysql:host=localhost; dbname=aznm', $user, $pass);
    $pdo->exec("set names utf8");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
}   catch (PDOException $e) {
    print 'Error!: ' . $e->getMessage() . '<br/>';
}
