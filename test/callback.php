<?php

function barber($type)
{
echo "You wanted a $type haircut, no problem";
}
call_user_func('barber', "mushroom");