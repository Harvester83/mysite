<?php

/*$text = "
<h2>Regular expressions</h2>
<p>Lorem Ipsum is simply dummy text of hello world the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 81500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>";

$search = preg_match_all('/d/', $text, $matches);

echo "<pre>";
print_r($matches);
echo "</pre>";*/

// $str = "123
$result = preg_match_all($pattern, $string, $found);

//echo 'Matches: '.$result;
print_r($found);


