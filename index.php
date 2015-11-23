<?php

// Преобразовать проект в шаблон MVC

error_reporting(-1);
header('Content-Type: text/html; charset=utf8');
include_once 'db.php';
include_once 'templates/array-test.php';
die;

$query = 'SELECT  `title`, `article`, `autor`, `date`
                  FROM `articles`
                  ORDER BY `date` DESC
          ';

$query = $pdo->query($query);
$articles = $query->fetchAll(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html>
<head>
    <title>PDO подключение и выборка с Data Object</title>
    <meta name="description" content="Alternanive article">
    <meta name="keywords" content="Alternanive article">
    <meta name="author" content="Alternanive article">
    <meta name="reply-to" content="Alternanive article">
    <meta name="robots" content="index, follow">
    <meta name="rating" content="General">
    <meta name="copyright" content="Alternanive article">
    <meta charset="utf-8">
    <link rel="stylesheet" href="media/css/style.css">
    <link rel="stylesheet" href="media/css/html5reset.css">
    <script  src="media/js/html5.js"></script>
    <script  src="media/js/main.js"></script>
</head>
<body>
    <div class="container">
        <table cellpadding="10"  cellspacing="5">
                <tr>
                    <th>Title</th>
                    <th>Article</th>
                    <th>Autor</th>
                </tr>
               <?php foreach($articles as $article) {?>
                   <tr>
                       <td><?php echo $article['title'];?></td>
                       <td><?php echo $article['article'];?></td>
                       <td><?php echo $article['autor'];?></td>
                   </tr>
                <?php }?>
        </table>
    </div>
</body>
</html>
