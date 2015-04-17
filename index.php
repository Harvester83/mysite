<?php

error_reporting(-1);
header('Content-Type: text/html; charset=utf8');
// include_once 'db.php';
include_once 'test4.php'; // It is simle to chose another page
die();

/* $query = 'SELECT `id`, `title`, `article`, `autor`, `date`
                  FROM `articles`
                  ORDER BY `date` DESC
                ';

   $query = $pdo->query($query);

    while($result = $query->fetch(PDO::FETCH_OBJ)){
        echo $result->id.' ';
        echo $result->title.'<br>';
}*/

    $query = '
        SELECT `cars`.`car`,`personal`.`name`,`personal`.`surname`
        FROM `personal`
        LEFT JOIN `cars`
        ON  `personal`.`cars_id` = `cars`.`id`
    ';

    $query = $pdo->query($query);
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html >
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
    <link rel="stylesheet" href="template/css/style.css">
    <link rel="stylesheet" href="template/css/html5reset.css">
    <script  src="template/js/html5.js"></script>
    <script  src="template/js/main.js"></script>
    <style>

        body {
            background: #f4f4f4;
        }

        .container {
            width: 980px;
            margin: 0 auto;
        }

        .box {
            float: left;
            border: 2px solid #000;
            width: 230px;
            height: 270px;
            background: #dbdbdb;
            margin: 20px;
            font-weight: bold;
            font-size: 13px;
            color: #4c4c4c;
            padding: 20px;
            font-family: Tahoma;
        }

        pre {
            word-break: break-word;
            color: #000;
            font-size: 12px;
            font-weight: bold;
        }

        p {
            color: #040404;
        }

        .article {
            background: #cbcbcb;
            padding: 5px;
        }

        h2 {
            margin: 5px; 0;
            color: #296F3D;
        }

        .clearer {
            clear: both;
        }

        .green {
            min-width: 200px;
            color:#000;
            background: #3a9426;
            padding: 20px;
            font-size: 20px;
            margin: 30px;
            font-weight: 600;
        }

        table {
            border: 1px solid #000;
        }

        td {
            padding: 5px;
            border: 1px solid #000;
        }

        th {
            padding: 5px;
            border: 1px solid #000;
        }
    </style>


</head>
<body>
    <div class="container">
        <table>
                <tr>
                    <th>CAR</th>
                    <th>NAME</th>
                    <th>SURNAME</th>
                </tr>
               <?php foreach($result as $item) {?>
                   <tr>
                       <td><?php echo $item['car'];?></td>
                       <td><?php echo $item['name'];?></td>
                       <td><?php echo $item['surname'];?></td>
                   </tr>
                <?php }?>
        </table>
    </div>
</body>
</html>
