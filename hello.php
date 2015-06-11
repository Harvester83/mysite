<?php

$input = array(1, 2, 3, 4, 5, 6);

// Создает новую анонимную функцию и присваевает её к переменной
$filter_even = function($item) {
    return ($item % 2) == 0;
};

// Встроенная функция принимает, как массив, так и функцию
$output = array_filter($input, $filter_even);


//$filter_add =



echo '<pre>';
print_r($output);
echo '</pre>';