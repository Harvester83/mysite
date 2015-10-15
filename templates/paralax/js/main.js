$(document).ready(function(){
   function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('top', - (scrolled * 0.2) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

    var x = $('.nav').css('top', '-2px');
    console.log($('.nav').css('top'));


});



