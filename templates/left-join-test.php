<?php

$query = "
           SELECT *
           FROM `nomenclature`, description
           WHERE  `nomenclature`.`id` = `description`.`id`
          ";


$query = $pdo->query($query);
$articles = $query->fetchAll(PDO::FETCH_ASSOC);

var_dump($articles);
die;

?>

<ul>
    <li></li>
</ul>