jQuery(document).ready(function () {

    
    var marginValue = 0;
    var txtMarginValue = 0;

    $('#slide1').show("slow");
    $('#slide2').hide();
    $('#slide3').hide();
    $('#slide4').hide();

    // PREVIOUS
    $('#prev').click(
        function(){
            if(marginValue >= 0) {
                console.log(marginValue);
            }else if (marginValue >= 2400) {
                console.log(marginValue)
            }else {
                
                marginValue+=600
                marginValue = Math.round(marginValue/100)*100;
                console.log(marginValue);
                
                $('.slides').animate({'margin-left' : marginValue + "px"})
                
                /*
                txtMarginValue += 300
                txtMarginValue = Math.round(txtMarginValue/100)*100;

                $('.txtslides').animate({'margin-top' : txtMarginValue + 'px'})
                */
                switch(marginValue) {
                    case 0:
                        $('#slide1').show("slow");
                        $('#slide2').hide("fast");
                        $('#slide3').hide("fast");
                        $('#slide4').hide("fast");
                        break;
                    case -600:
                        $('#slide2').show("slow");
                        $('#slide1').hide("fast");
                        $('#slide3').hide("fast");
                        $('#slide4').hide("fast");
                        break;
                    case -1200:
                        $('#slide3').show("slow");
                        $('#slide1').hide("fast");
                        $('#slide2').hide("fast");
                        $('#slide4').hide("fast");
                        break;
                        
                    case -1800:
                        $('#slide4').show("slow");
                        $('#slide1').hide("fast");
                        $('#slide2').hide("fast");
                        $('#slide3').hide("fast");
                        break;

                }

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
                $('.slides').animate({'margin-left' : marginValue + "px"})
                console.log(marginValue);
                /*txtMarginValue -= 300
                $('.txtslides').animate({'margin-top' : txtMarginValue + 'px'})
                */
                switch(marginValue) {
                    case 0:
                        $('#slide1').show("slow");
                        $('#slide2').hide("fast");
                        $('#slide3').hide("fast");
                        $('#slide4').hide("fast");
                        break;
                    case -600:
                        $('#slide2').show("slow");
                        $('#slide1').hide("fast");
                        $('#slide3').hide("fast");
                        $('#slide4').hide("fast");
                        break;
                    case -1200:
                        $('#slide3').show("slow");
                        $('#slide1').hide("fast");
                        $('#slide2').hide("fast");
                        $('#slide4').hide("fast");
                        break;
                        
                    case -1800:
                        $('#slide4').show("slow");
                        $('#slide1').hide("fast");
                        $('#slide2').hide("fast");
                        $('#slide3').hide("fast");
                        break;
                    }
            }
        }
    );
});