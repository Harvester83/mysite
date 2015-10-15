<style>
    .red {
        color: red;
    }
</style>

<?php
// $item  = 'Avropa İttifaqı və Dağlıq Qarabağ münaqişəsi: Xarici - ŞƏRH';
// $item  = 'Yaqub Mahmudov Kiyev şəhərində gizli yollarla xəritə hazırlatdırdıq - ŞƏRH';
$item  = 'Avropa İttifaqı və Dağlıq Qarabağ münaqişəsi: Xarici mətbuatın gözü ilə - EKSKLÜZİV';

$arrItem = explode(' ', $item);

if(in_array('-', $arrItem)) {
    $items = explode('-', $item);?>
    <p><?php echo $items[0].' - <span class="red">'.$items[1].'</span>'; ?></p>
<?php } else {?>
    <p><?php echo $item ?></p>
<?php }?>








