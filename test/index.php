
<?php

$carModels = array(
    1 => array(
        'name' => 'ABM',
        'series' => array(
            1 => 'Volcan 150',
        ),
    ),

    2 => array(
        'name' => 'Acura',
        'series' => array(
            1 => 'ILX',
            2 => 'MDX',
        ),
    ),

    3 => array(
        'name' => 'Alfa Romeo',
        'series' => array(
            1 => '156',
            2 => '164',
        ),
    ),

    4 => array(
        'name' => 'Aston Martin',
        'series' => array(
            1 => 'DB9',
            2 => 'DBS',
            3 => 'Rapide',
        ),
    ),

    5 => array(
        'name' => 'Audi',
        'series' => array(
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

for($i = 1; $i <= count($carModels); $i++) {
    echo $carModels[$i]['name'].'<br>';
}
