jQuery(document).ready(function () {

    
    var marginValue= 0;
    var txtMarginValue=0;

    // PREVIOUS
    $('#prev').click(
        function(){
            if(marginValue >= 0) {
                console.log(marginValue);
            }else if (marginValue >= 2400) {
                console.log(marginValue)
            }else {

                marginValue+=600
                $('.slides').animate({'margin-left' : marginValue + "px"})
                console.log('click')
                txtMarginValue += 300
                $('.txtslides').animate({'margin-top' : txtMarginValue + 'px'})
            }
        }
    );

    //margin begins at zero - can go all the way up to 2400, all the way down to -1800
        //NEXT
    $('#next').click(
        function(){
            if(marginValue >= 2400) {
                console.log(marginValue);
            }else if (marginValue <= -1800) {
                console.log(marginValue)
            }else {
                marginValue-= 600
                //$('.sliderimg').attr("src", "assets/pic" +(imgValue+1)+".jpg");
                $('.slides').animate({'margin-left' : marginValue + "px"})
                console.log('click')
                txtMarginValue -= 299
                $('.txtslides').animate({'margin-top' : txtMarginValue + 'px'})
            }
        }
    );
});