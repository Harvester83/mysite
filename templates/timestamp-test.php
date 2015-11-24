<?php

$timeStamp = 1448196317159;
$date = date($timeStamp . ' = d  M Y');

echo $date;
// echo $date->format('U = Y-m-d H:i:s') . '<br>';
echo '<br>';
echo '<br>';
//echo strtotime("now").'<br>';
echo strtotime("24 Nov 2015"). '<br>';
echo '<p style="color: #f00">' . strtotime('24 Nov 2015'). '</p>';
/*echo strtotime("+1 day"). '<br>';
echo strtotime("+1 week"). '<br>';
echo strtotime("+1 week 2 days 4 hours 2 seconds"), '<br>';
echo strtotime("next Thursday"). '<br>';
echo strtotime("last Monday"). '<br>';*/