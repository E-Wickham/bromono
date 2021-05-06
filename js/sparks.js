jQuery(document).ready(function () {

    $('#box1').hover (
        function(){
            $('#sparks').toggleClass('firework_p1 firework');
            console.log('fireworkp1')
        }
    );

    $('#box2').hover (
        function(){
            $('#sparks').toggleClass('firework_p2 firework');
            console.log('fireworkp2')
        }
    );

    $('#box3').hover (
        function(){
            $('#sparks').toggleClass('firework_p3 firework');
            console.log('fireworkp3')
        }
    );
});