<?php
/**

session_cache_expire - возвращает окончание действия текущего кэша
session_cache_limiter - получает и/или устанавливает текущий ограничитель кэша
session_commit - псевдоним session_write_close()
session_decode - декодирует данные сессии из строки
session_destroy - уничтожает все данные, зарегистрированные для сессии
session_encode - шифрует данные текущей сессии как строку
session_get_cookie_params - получает параметры куки сессии
session_id - получает и/или устанавливает текущий session id
session_is_registered - определяет, зарегистрирована ли переменная в сессии
session_module_name - получает и/или устанавливает модуль текущей сессии
session_name - получает и/или устанавливает имя текущей сессии
session_regenerate_id - модифицирует текущий идентификатор сеанса недавно сгенерированным
session_register - регистрирует одну или более переменных для текущей сессии
session_save_path - получает и/или устанавливает путь сохранения текущей сессии
session_set_cookie_params - устанавливает параметры куки сессии
session_set_save_handler - устанавливает функции хранения сессии уровня пользователя
session_start - инициализирует данные сессии
session_unregister - дерегистрирует переменную из текущей сессии
session_unset - освобождает все переменные сессии
session_write_close - записывает данные сессии и конец сессии
 *
 */
session_start();
?>
<!DOCTYPE html>
<html>
    <body>
        <?php

            // Set session variables
            $_SESSION['favcolor'] = "green";
            $_SESSION['favanimal'] = "cat";

            echo "Session variables are set.";
            session_destroy();

        ?>
    </body>
</html>