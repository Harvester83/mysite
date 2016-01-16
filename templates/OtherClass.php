<?php
class OtherClass extends MyClass
{

}

$classname = 'OtherClass';
echo $classname::doubleColon(); // ??????? ? ?????? PHP 5.3.0

OtherClass::doubleColon();