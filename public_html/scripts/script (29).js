$(function () {
    var section = $(".sixth-section");
    var facebook = $(".facebook-icon");
    $(window).scroll(function () {
        var scroll = $(this).scrollTop() + $(this).height();
        section.each(function (i, n) {
            if (scroll > $(this).offset().top) {
                facebook.eq(i).css({'position': 'absolute'});
                if (i > 0) {
                }
            }
            if (scroll < ($(this).offset().top + facebook.eq(i).height())) {
                facebook.eq(i).css({'position': 'fixed', "top": ""});
            }
        });
    });
    $(".cross").hide();
    if ($(window).width() > 1285) {
        $(".nav").show;
    } else
    {
        $(".nav").hide();
        
        $(".hamburger").click(function () {
            $(".nav").slideToggle("slow", function () {
                $(".hamburger").hide();
                $(".cross").show();
            });
        });
        $(".cross, li").click(function () {
            $(".nav").slideToggle("slow", function () {
                $(".hamburger").show();
                $(".cross").hide();
            });
        });
    }


});

