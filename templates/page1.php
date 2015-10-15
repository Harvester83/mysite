<?php

include_once  'class.inc';

$a = new A;
$s = serialize($a);
// сохраняем $s где-нибудь, откуда page2.php сможет его получить.
file_put_contents('store', $s);