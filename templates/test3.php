<?php
$cars = array(
    1 => array(
        'brand' => 'ABM',
        'model' => array(
            1 => 'Volcan 150',
        ),
    ),

    2 => array(
        'brand' => 'Acura',
        'model' => array(
            1 => 'ILX',
            2 => 'MDX',
        ),
    ),

    3 => array(
        'brand' => 'Alfa Romeo',
        'model' => array(
            1 => '156',
            2 => '164',
        ),
    ),

    4 => array(
        'brand' => 'Aston Martin',
        'model' => array(
            1 => 'DB9',
            2 => 'DBS',
            3 => 'Rapide',
        ),
    ),

    5 => array(
        'brand' => 'Audi',
        'model' => array(
            1 => '100',
            2 => 'A1',
            3 => 'A3',
            4 => 'A4',
            5 => 'A5',
            6 => 'A6',
            7 => 'A7',
            8 => 'A8',
            9 => 'Allroad',
            10 => 'Q3',
            11 => 'Q5',
            12 => 'Q7',
            13 => 'R8',
            14 => 'RS7',
            15 => 'S4',
            16 => 'S5',
            17 => 'S7',
            18 => 'S8',
            19 => 'TT',
            20 => 'TTS',
        ),
    ),
);
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
    <style>
        .container {
            width: 900px;
            margin: 0 auto;
        }
        #car-brand {
            width: 300px;
            border: none;
            color: #000;
            outline: 1px solid #000;
            height: 30px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 100px;
        }
    </style>
</head>
<body>
<div class="container">

    <h1><?php echo print_r($cars[1]); ?></h1>
    <!--<div>
        <?php /*foreach ($carModels as $carModel => $carModelValue) {*/?>
            <p><?php /*print_r( $carModel); */?></p>
        <?php /*}; */?>
    </div>-->

    <!-- select models cars drom array-->
    <select id="car-brand">
        <?php  foreach ($cars as $carsModel => $carModelValue) { ?>
            <?php foreach ($carModelValue['model'] as $carsModelKey => $carsModel) { ?>
                <option><?php print $carsModel; ?></option>
            <?php }; ?>
        <?php }; ?>
    </select>

     <!--select specific car models from array-->
    <select id="car-brand">
        <?php foreach ($cars[1] as $carModelKey => $carModelValue) { ?>
            <option><?php print $carModelValue; ?></option>
        <?php }; ?>
    </select>

</div>
</body>
</html>


