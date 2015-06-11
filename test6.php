<?php

$input = array(1, 22);

// Создает новую анонимную функцию и присваевает её к переменной
$filter_even = function($item) {
    return ($item % 2) == 0;
};

$filter_add = function ($item) {
    return (++$item);
};

// Встроенная функция принимает, как массив, так и функцию
$output = array_filter($input, $filter_add);



/*echo '<pre>';
print_r($output);
echo '</pre>';*/


function getIncrement($item)
{
    return $item;
}


//echo getIncrement(12) + 1;