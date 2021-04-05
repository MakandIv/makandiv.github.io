var url = location.pathname;
var anim = 0;
var block1 = 0;

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
        if ($(window).scrollTop() > ($("#headerwrap").height() - $(window).innerHeight() + 50)) {
            if (block1 == 0) {
                $("h2:eq(0)").animate({
                    marginTop: 20
                });
                block1 = 1;
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

/*$(function () {
    $(".arrow_down").prepend($('<a href="#text"><i class="fa fa-angle-down fa-5x"></i></a>')
        .attr({
            "id": "scroll-text",
            "title": "Read Text"
        })
    );
});*/


function frame_load(iframe) {
    $(".black_bg:eq(" + (iframe - 1) + ")").append("<iframe name=\"frame1\" src=\"nn2.html\" frameborder=\"0\" class=\"nn1\">Sorry, your browser is not supported.</iframe>");
    $("#button_nn1").remove();
}

$(document).ready(function () {
    $("h2:eq(0)").css("marginTop", "100px");
});
