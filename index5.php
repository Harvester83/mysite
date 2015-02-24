<?php

$subject = 'Welcome to RegExr v2.0 by gskinner.com_!
rashad.suleymanov83@gmail.com
Edit the Expression & Text to see matches. Roll over matches or the expression for details. Undo mistakes with ctrl-z. Save & Share expressions with friends or the Community. A full Reference & Help is available in the Library, or watch the video Tutorial.

Sample text for testing:
abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ

0123456789 +-.,!@#$%^&*();\/|<>
12345 -98.7 3.141 .6180 9,000 +42
555.123.4567	+1-(800)-555-2468
foo@demo.net	bar.ba@test.co.uk
www.demo.com	http://foo.co.uk/
http://regexr.com/foo.html?q=bar';

$pattern = '/\w+@\w+\.\w+/';
preg_match_all($pattern, $subject, $matches);

echo "<pre>";
print_r($matches);
echo "</pre>";
