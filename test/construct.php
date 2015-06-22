<?php
class MyDestructableClass {


    function __destruct() {
        print "Уничтожается " . $this->name . "\n";
    }

    function __construct() {
        print "Конструктор</br>";
        $this->name = "MyDestructableClass";
    }
}

$obj = new MyDestructableClass();
