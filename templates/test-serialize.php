<?php

$arr1 = array('/admin/uploads/2015/11/img-1.jpg', '/admin/uploads/2015/11/img-2.jpg');

$arr2 = array(83, 84);

$arr3 = array(85, 86);

$arr4 = array(87, 88);

$arr5 = array(89, 90);


echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';


$serializeNum = serialize($arr1);

echo $serializeNum;

echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';

$unser = unserialize($serializeNum);

echo "<pre>";
print_r($unser);
echo "</pre>";