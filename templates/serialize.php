<?php

$arr = array(41, 42, 43, 44, 45);

echo "<pre>";
print_r($arr);
echo "</pre>";

echo serialize($arr);


$num = 34;
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';


$serializeNum = serialize($num);

echo $serializeNum;
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo unserialize($serializeNum);