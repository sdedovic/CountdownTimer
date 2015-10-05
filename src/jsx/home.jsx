$( document ).ready(function() {
    $('#start').on('click', function(){
        var num = 45;
        var timer = $('#timer');
        var number = $('#number');
        var tick = function(){
            if(num > 1){
                num = num - 1;
                number.text(num);
            }else{
                timer.replaceWith('<p class="text-center"><a href="/">Again?</a></p>\n<iframe width="100%" height="90%" src="https://www.youtube.com/embed/EyoutEHpPAU?autoplay=1" frameborder="0" allowfullscreen></iframe>');
                clearInterval(counter);
            }
        };
        var counter = setInterval(tick, 1000);
    });
});