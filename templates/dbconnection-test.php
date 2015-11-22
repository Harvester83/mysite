<?php

$request = 'SELECT `created_at` FROM `filemanager_mediafile`';
$query = $pdo->query($request);
$res= $query->fetchAll(PDO::FETCH_ASSOC);

echo "<pre>";
print_r($res);
echo "</pre>";
?>
<style>
    .list-data-block {
        width: 980px;
        background: #aaa;
        padding: 20px;
        margin: 0 auto;
    }

    .list-data-block ul {
        overflow: hidden;
    }


    .list-data-block ul li {
         padding: 5px;
        list-style: none;
    }

    .list-data-block ul li a {
        color: #2b2b2b;
        text-decoration: none;
        font-size: 20px;
    }

</style>

<div class="list-data-block">
    <?php foreach($res as $arrayNumber => $arrayNumbers){ ?>
        <?php foreach($arrayNumbers as $val){ ?>
            <ul>
                <li><a href="#"><?php echo $val; ?></a></li>
            </ul>
        <?php }; ?>
    <?php }; ?>
</div>
