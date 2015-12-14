<?php
$cars = array(
    1 => array(
        'brand' => 'ABM',
        'model' => array(
            1 => 'Volcan 150',
        ),
    ),

    2 => array(
        'brand' => 'Acura',
        'model' => array(
            1 => 'ILX',
            2 => 'MDX',
        ),
    ),

    3 => array(
        'brand' => 'Alfa Romeo',
        'model' => array(
            1 => '156',
            2 => '164',
        ),
    ),

    4 => array(
        'brand' => 'Aston Martin',
        'model' => array(
            1 => 'DB9',
            2 => 'DBS',
            3 => 'Rapide',
        ),
    ),

    5 => array(
        'brand' => 'Audi',
        'model' => array(
            1 => '100',
            2 => 'A1',
            3 => 'A3',
            4 => 'A4',
            5 => 'A5',
            6 => 'A6',
            7 => 'A7',
            8 => 'A8',
            9 => 'Allroad',
            10 => 'Q3',
            11 => 'Q5',
            12 => 'Q7',
            13 => 'R8',
            14 => 'RS7',
            15 => 'S4',
            16 => 'S5',
            17 => 'S7',
            18 => 'S8',
            19 => 'TT',
            20 => 'TTS',
        ),
    ),
);
$years = array(
    2015 => 2015,
    2014 => 2014,
    2013 => 2013,
    2012 => 2012,
    2011 => 2011,
    2010 => 2010,
    2009 => 2009,
    2008 => 2008,
    2007 => 2007,
    2006 => 2006,
    2005 => 2005,
    2004 => 2004,
    2003 => 2003,
    2002 => 2002,
    2001 => 2001,
    2000 => 2000,
    1999 => 1999,
    1998 => 1998,
    1997 => 1997,
    1996 => 1996,
    1995 => 1995,
    1994 => 1994,
    1993 => 1993,
    1992 => 1992,
    1991 => 1991,
    1990 => 1990,
    1989 => 1989,
    1988 => 1988,
    1987 => 1987,
    1986 => 1986,
    1985 => 1985,
    1984 => 1984,
    1983 => 1983,
    1982 => 1982,
    1981 => 1981,
    1980 => 1980,
    1979 => 1979,
    1978 => 1978,
    1977 => 1977,
    1976 => 1976,
    1975 => 1975,
    1974 => 1974,
    1973 => 1973,
    1972 => 1972,
    1971 => 1971,
    1970 => 1970,
    1969 => 1969,
    1968 => 1968,
    1967 => 1967,
    1966 => 1966,
    1965 => 1965,
    1964 => 1964,
    1963 => 1963,
    1962 => 1962,
    1961 => 1961,
    1960 => 1960,
    1959 => 1959,
    1958 => 1958,
    1957 => 1957,
    1956 => 1956,
    1955 => 1955,
);

$years2 = array(
    1 => 2015,
    2 => 2014,
    3 => 2013,
    4 => 2012,
    5 => 2011,
    6 => 2010,
    7 => 2009,
    8 => 2008,
    9 => 2007,

);
?>
<!DOCTYPE html >
<html>
<head>
    <title>PDO подключение и выборка с Data Object</title>
    <meta name="description" content="Alternanive article">
    <meta name="keywords" content="Alternanive article">
    <meta name="author" content="Alternanive article">
    <meta name="reply-to" content="Alternanive article">
    <meta name="robots" content="index, follow">
    <meta name="rating" content="General">
    <meta name="copyright" content="Alternanive article">
    <script src="templates/paralax/js/jquery.js"></script>
    <meta charset="utf-8">
    <style>
        .container {
            width: 800px;
            margin: 0 auto;
        }

        #car-brand, #car-model, #selectbox {
            width: 200px;
            border: none;
            color: #000;
            outline: 1px solid #000;
            height: 30px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
        }

        p {
            padding: 0;
            margin: 0;
        }

        button, .but {
            display: block;
            background: #0F0F0F;
            width: 150px;
            padding: 10px;
            border: 1px solid #0F0F0F;
            color: #f4f4f4;
            font-size: 17px;
            cursor: pointer;
            margiN: 100px 0 0 0;
            border-raDius: 5px;
            text-decoration: none;
            text-align: center;
            text-transform: uppercase;
        }

    </style>
</head>
<body>


<div class="container">

    <!--
    <h5>
        <?php
    /*            echo "<pre>";
                    print_r(($cars[1]));
                echo "</pre>";
            */ ?>
    </h5>

    <h5><?php /*print(($cars[1]['brand'])); */ ?></h5>

    <div>
        <?php /*$carIndificator = 5; */ ?>
        <select id="car-brand">
                <option><?php /*print(($cars[$carIndificator]['brand'])); */ ?></option>
        </select>
    </div>

    <!-- select models cars drom array-->
    <!--<div>
        <select id="car-brand">
            <?php /*/* foreach ($cars[$carIndificator]['model'] as $models) { */ ?>
                    <option><?php /*/*print $models; */ ?></option>
                <?php /*}; */ ?>
        </select>
    </div>-->

    <h1 class="text">TEST DRIVE</h1>

    <script>
        var autos = {
            1: {
                carBrand: 'ABM',
                carModel: {
                    1: 'Volcan 150'
                }
            },

            2: {
                carBrand: 'Acura',
                carModel: {
                    1: 'ILX',
                    2: 'MDX'
                }
            },

            3: {
                carBrand: 'Alfa Romeo',
                carModel: {
                    1: '156',
                    2: '164'
                }
            },

            4: {
                carBrand: 'Aston Martin',
                carModel: {
                    1: 'DB9',
                    2: 'DBS',
                    3: 'Rapide'
                }
            },

            5: {
                carBrand: 'Audi',
                carModel: {
                    1: '100',
                    2: 'A1',
                    3: 'A3',
                    4: 'A4',
                    5: 'A5',
                    6: 'A6',
                    7: 'A7',
                    8: 'A8'
                }
            }
        };

        $(document).ready(function () {

            for (i in autos) {
                $('#car-brand').append('<option value="'+ i +'">' + autos[i]['carBrand'] + '</option>');
            }

            $('#car-model').append('<option class="car-param" value="' + 1 + '">' + autos[1]['carModel'][1] + '</option>');

            $('#car-brand').on('change', function (){

                $('.car-param').remove();
                var num = $(this, '.car-param').val();
                for (key in autos[num]['carModel']) {
                    $('#car-model').append('<option class="car-param" value="' + key + '" data="data-car-param">' + autos[num]['carModel'][key] + '</option>');
                }
            });

        });

    </script>


    <select id="car-brand"></select>

    <select id="car-model"></select>

    <button>OK</button>

    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.</h2>

    <h2 style="margin-top: 20px; font-size: 30px; color: #000">
        <?php print (int)((0.1 + 0.7) * 10 ); ?>
    </h2>

    <a class="but" href="#">Нажми меня</a>

</div>
</body>
</html>


