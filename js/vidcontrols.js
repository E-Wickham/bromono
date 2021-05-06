jQuery(document).ready(function () {

    var vids = document.getElementById("realVid"); 
    $('#truck').css( {"animation-play-state":"paused"} );

    $('#vid-play').click(function(){
       vids.play();
       $('#truck').css( {"animation-play-state":"running"} );
    });

    $('#vid-pause').click(function(){
        vids.pause();
       
    });
});