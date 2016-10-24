$(document).ready(function(){
    "use strict";

    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;

    // animation and timing for the slide show
    var runSlideShow = function(){
        $("#caption").slideUp(4000);
        $("#slide").slideUp(4000,

            function(){
                if(nextSlide.next().length === 0){
                    nextSlide = $("#slides img:first-child");
                }
                else{
                    nextSlide = nextSlide.next();
                }

                nextSlideSource = nextSlide.attr("src");
                nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).slideDown(4000);
                $("#caption").text(nextCaption).slideDown(4000);
                $("#slide").delay(2000);
                $("#caption").delay(2000);

            }
        );
    };




    // start image timing and starting slide show function
    var timer1 = setInterval(runSlideShow, 4000);


    // starting and stopping the slide show
    $("#slide").click(function(){
        if(timer1 !== null){
            clearInterval(timer1);
            timer1 = null;
        }
        else{
            timer1 = setInterval(runSlideShow, 2000);
        }
    });

});