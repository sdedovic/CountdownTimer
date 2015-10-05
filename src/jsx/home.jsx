$( document ).ready(function() {
    var num = 45;
    var timer = $('#timer');
    var tick = function(){
        if(num > 0){
            num = num - 1;
            timer.text(num);
        }else{
            timer.replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/EyoutEHpPAU?autoplay=1" frameborder="0" allowfullscreen></iframe>');
            clearInterval(counter);
        }
    };
    var counter = setInterval(tick, 1000);
});