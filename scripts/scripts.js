var url = location.pathname;

function scrollTop() {
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 0) {
            $("#scroll-top").fadeIn(300);
            $(".navbar-dark").addClass("bg-dark");
        } else {
            $("#scroll-top").fadeOut(300);
            $(".navbar-dark").removeClass("bg-dark");
            
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

/*$(function () {
    $(".arrow_down").prepend($('<a href="#text"><i class="fa fa-angle-down fa-5x"></i></a>')
        .attr({
            "id": "scroll-text",
            "title": "Read Text"
        })
    );
});*/


if (location.pathname == '/' || location.pathname == '/index.html') {
    $(document).ready(function () {
    setTimeout(function () {
       $(".loadingbackground").fadeOut(300); 
    }, 2200);
    setTimeout(function () {
        $(".loadingbackground").remove();
    }, 2500);
});
} else {
    $(document).ready(function () {
        $(".loadingbackground").remove();
    });
}

function frame_load(iframe) {
    $(".black_bg:eq(" + (iframe - 1) + ")").append("<iframe name=\"frame1\" src=\"nn2.html\" frameborder=\"0\" class=\"nn1\">Sorry, your browser is not supported.</iframe>");
    $("#button_nn1").remove();
}
