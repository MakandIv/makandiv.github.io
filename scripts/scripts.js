var url = location.pathname;
var anim = 0;
var num_block = 0;
var height = 50;



function scrollTop() {
    $(window).scroll(function (e) {
        $("h1").css("transform", "translateY(" + $(window).scrollTop() * 0.5 + "px)");
        if ($(window).scrollTop() > 0) {
            $("#scroll-top").fadeIn(300);
            if (anim == 0) {
                $("nav:eq(0)").animate({
                    opacity: 1
                });
                anim = 1;
            }
        }
        if (!url == "/sources.html") {
            if ($(window).scrollTop() > (height)) {
                $(".main_center:eq(" + num_block + ")").animate({
                    paddingTop: 25
                });
                height += $(".main_center:eq(" + num_block + ")").parent().height() - 75;
                num_block++;
            }
        }
        if ($(window).scrollTop() == 0) {
            $("#scroll-top").fadeOut(300);
            if (anim == 1) {
                $("nav:eq(0)").animate({
                    opacity: 0.5
                });
                anim = 0;
            }
        }
    });
}


$(function () {
    $("div.footer").append($('<i class="fa fa-angle-double-up fa-5x"></i>')
        .attr({
            "id": "scroll-top",
            "title": "Up"
        })
    );
    $("#scroll-top").click(function (e) {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
    });
    scrollTop();
});

if (url == "/index.html" || url == "/") {
    $("h1:eq(0)").css("fontSize", "70px");
}


function frame_load(iframe) {
    $(".beige_bg:eq(" + (iframe - 1) + ")").append("<iframe name=\"frame1\" src=\"nn2.html\" frameborder=\"0\" class=\"nn1\">Sorry, your browser is not supported.</iframe>");
    $("#button_nn1").remove();
}

$(document).ready(function () {
    $(".main_center").each(function () {
        $(this).css("paddingTop", "100px");
    });
    scrollTop();
});

if (location.pathname == '/' || location.pathname == '/index.html') {
    $(document).ready(function () {
        setTimeout(function () {
            $(".load").fadeOut(500);
        }, 2200);
        setTimeout(function () {
            $(".load").remove();
        }, 2800);
    });
} else {
    $(document).ready(function () {
        setTimeout(function () {
            $(".load").fadeOut(200);
        }, 0);
        setTimeout(function () {
            $(".load").remove();
        }, 200);
    });
}
