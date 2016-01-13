<?php

// include_once 'db.php' connected already;

if (isset($_POST['submit'])) {
    $login = $_POST['login'];
    $password = $_POST['password'];

    $sql = '
        SELECT *
        FROM `users`
        WHERE `login` = :login
        AND `password` = :password
     ';

    $prepareSql = $pdo->prepare($sql);
    $prepareSql->bindValue(':login', $login);
    $prepareSql->bindValue(':password', $password);
    $prepareSql->execute();
    $user = $prepareSql->fetch();


    if (!empty($user)) {
        echo 'You successfully logging.';
    } else {
        echo 'Pass or login is incorect';
    }
}?>



<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>TEST IT SIMPLE</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div>
    <h2>LogIn</h2>
    <form action="#" method="POST">
        <div><input type="text" name="login"></div>
        <div><input type="password"  name="password"></div>
        <div><input type="submit" name="submit"></div>
    </form>
</div>
</body>
</html>