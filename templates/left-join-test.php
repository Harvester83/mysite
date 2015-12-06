<?php

$query = "
           SELECT *
           FROM `nomenclature`
           WHERE id IN (1, 4)
          ";


$query = $pdo->query($query);
$articles = $query->fetchAll(PDO::FETCH_ASSOC);

var_dump($articles);
die;

?>

<ul>
    <li></li>
</ul>