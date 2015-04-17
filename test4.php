<?php

// Область видимости

include_once 'list_user.php';
/*echo $listUser['user'];*/

function getParamList()
{
    return $listUser['user'];
}

function getParam($x)
{
    return $x;
}

echo @getParamList();  // @ это для того чтобы мы не видили ошибку (неопредеоенноя переменная )
echo '<hr style="margin: 50px 0;">';
echo getParam($listUser['user']);