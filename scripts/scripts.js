var url = location.pathname;
$('.nav-link').each(function () {
    var thisURL = $(this).attr('href');
    thisURL = "/" + thisURL;
    if (thisURL == url) {
        $(this).parent('.nav-item').addClass('active');
        if (url != "/index.php") {
            $('title').text("Machine Learning | " + $(this).text());
        }
    } else if (url == '/') {
        $('.navbar-nav li:first').addClass('active');
    }
});
$('.dropdown-item').each(function () {
    var thisURL = $(this).attr('href');
    thisURL = "/" + thisURL;
    if (thisURL == url) {
        $('title').text("Machine Learning | About " + $(this).text());
    }
});

$('#option1').on('click', function () {
    $("iframe").attr('src', 'neuralnetwork1.php');
});
$('#option2').on('click', function () {
    $('iframe').attr('src', 'neuralnetwork2.php');
});

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


if (location.pathname == '/' || location.pathname == '/index.php') {
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
Waves.attach('.btn', ['waves-effect']);
