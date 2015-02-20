<?php

// get all php files AND txt files
$files = glob('*.{php,txt}', GLOB_BRACE);

print_r($files);
/* output looks like:
Array
(
    [0] => phptest.php
    [1] => pi.php
    [2] => post_output.php
    [3] => test.php
    [4] => log.txt
    [5] => test.txt
)