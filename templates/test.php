<?php
class Foo
{
    public static function aStaticMethod()
    {
        return 45;
    }
}

echo Foo::aStaticMethod();

//$classname = 'Foo';
//$classname::aStaticMethod(); / ????dd??? ? PHP 5.3.0