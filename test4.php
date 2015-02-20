<?php
/**
 * @val string
 * Get the color (span) from text when width use is '[]'
 */

?>
<style>
    body {
        background: #000;
    }

    .red {
        color: #f00;
        font-size: 40px;
    }
</style>
<?php


function before ($this, $inthat)
{
    return substr($inthat, 0, strpos($inthat, $this));
}

function after ($this, $inthat)
{
    if (!is_bool(strpos($inthat, $this)))
        return substr($inthat, strpos($inthat,$this)+strlen($this));
}


function between ($this, $that, $inthat)
{
    return before ($that, after($this, $inthat));
}


$item = 'Yaqub Mahmudov: [Kiyev şəhərində gizli] yollarla xəritə hazırlatdırdıq” – EKSKLÜZİV';


$important_text 	 		 = between('[', ']', $item);
$important_text_full_replace = '['.$important_text.']';
$important_text_full 		 =	'<span class="red">'.$important_text.'</span>';
$last_text 			 		 = str_replace($important_text_full_replace, $important_text_full, $item);
?>
<p class="red"><?php echo $item; ?></p>
<!--<p><?php /*echo $last_text; */?></p>-->

