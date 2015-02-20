<?php

/***
 * Class PressController
 */
class PressController
{
    /**
     * @var string
     */
    private $layout = 'press';

    public function actionIndex()
    {
       $press = new Press();
       $articles = $press->getPressData();

       $variables = array(
            'articles' => $articles
        );

        View::render($this->layout, $variables);
    }
}