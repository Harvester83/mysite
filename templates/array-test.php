<?php

class GetArrayMetods
{
    public function getMaxArrayValue($arr)
    {
        $max = $arr[0];
        $i = 0;
        foreach ($arr as $item) {
            if ($max < $item) {
                $max = $item;
            }
            $i++;
        }

        return $max;
    }

    function getMinArrayValue($arr)
    {
        $min = $arr[0];
        $i = 0;
        foreach ($arr as $item) {
            if ($min > $item) {
                $min = $item;
            }
            $i++;
        }

        return $min;
    }

    public function getListArray($items)
    {?>
        <ul>
            <?php foreach ($items as $item => $options) { ?>
                <li><?php echo $item ?>
                    <?php foreach ($options as $option => $cells) { ?>
                        <ul>
                            <li><?php echo $option; ?>
                                <?php foreach ($cells as $cell) { ?>
                                    <ul>
                                        <li><?php echo $cell; ?></li>
                                    </ul>
                                <?php } ?>
                            </li>
                        </ul>
                    <?php } ?>
                </li>
            <?php } ?>
        </ul>
    <?php }
}

$numbers = array(10, 454, 2, 68);

$EuropeMainland = array(
    'Германия' => array(
        'Берлин' => array(
            'Бранденбургские ворота',
            'Рейхстаг',
            'Немецкий собор',
            'Старая национальная галерея',
        ),

        'Гамбург' => array(
            'Центральная Ратуша',
            'Памятник Бисмарку',
            'Церковь Св. Гертруда',
            'Церковь Св. Екатерины',
        ),

        'Мюнхен' => array(
            'Выставочный зал BMW в Мюнхене',
            'Мюнхенская резиденция',
            'Баварский национальный музей',
            'Здание мюнхенской Глиптотеки',
        ),
    ),

    'Франция' => array(
        'Париж' => array(
            'Мэрия Парижа',
            'Северный вокзал',
            'Парижский университет',
            'Эйфелева башня',
        ),

        'Марсель' => array(
            'Музей изящных искусств',
            'Аббатство Сен-Виктор и базилика Нотр-Дам-де-ла-Гард',
        ),

        'Лион' => array(
            'Розовая башня времён Возрождения',
            'Лионский собор',
            'Набережная Роны в Лионе',
        ),
    ),

    'Испания' => array(
        'Мадри́д' => array(
            'Музей Прадо',
            'Музей королевы Софии',
            'Скульптура «Медведь и земляничное дерево»',
        ),

        'Барселона' => array(
            'Барселонский трамвай',
            'Такси в Барселоне',
            'Площадь Каталонии',
            'Памятник Колумбу',
            'Небоскрёбы Олимпийской деревни',
        ),

        'Валенсия' => array(
            'Ворота средневековой Валенсии',
            'Монастырь св. Михаила',
            'Колокольни валенсийских церквей',
        ),
    ),
);

$getArrayMetods = new GetArrayMetods();
$getArrayMetods->getListArray($EuropeMainland);











