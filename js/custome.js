$('#icon1').click(function(){
          $('.navbar-toggler').hide();
          $('#icon2').show();
        });
        $('#icon2').click(function(){
          $('.navbar-toggler').hide();
          $('#icon1').show();
        });

$(document).on("ready", function() {
/* - Sticky Navigation */
        var nav = $('.header_s');
        $(window).scroll(function() {
            if ($(this).scrollTop() > 55) {
                nav.addClass("navigation-fixed animated fadeInDown");
            } else {
                nav.removeClass("navigation-fixed animated fadeInDown");
            }
        });



        /*===== go to top ===========*/
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
        $('#return-to-top').click(function () { $('body,html').animate({ scrollTop: 0 }, 500); });


        // ========= right-side fixed form
    $("#inquiry_form").click(function () {
        $(".b-notification-bar").toggleClass("active");
        if ($(".b-notification-bar .inq").hasClass('info-box1')) {
            $(".b-notification-bar .inq").removeClass("info-box1");
            $("#inquiry_form").removeClass("contact")
        } else {
            $(".b-notification-bar .inq").addClass("info-box1");
            $("#inquiry_form").addClass("contact")
        }
        $("#rfp_form").removeClass("submitrfp");
        $(".b-notification-bar .rfp").removeClass("info-box2")
    });
    $(".closeInquiry").click(function () {
        $(".b-notification-bar").removeClass("active");
        $(".b-notification-bar .inq").removeClass("info-box1");
        $("#inquiry_form").removeClass("contact")
    });
    $(".closeRfp").click(function () {
        $(".b-notification-bar").removeClass("active");
        $(".b-notification-bar .rfp").removeClass("info-box2");
        $("#rfp_form").removeClass("submitrfp")
    });
    $("#rfp_form").click(function () {
        $(".b-notification-bar").toggleClass("active");
        $(".b-notification-bar .inq").removeClass("info-box1");
        $("#inquiry_form").removeClass("contact");
        if ($(".b-notification-bar .rfp").hasClass("info-box2")) {
            $(".b-notification-bar .rfp").removeClass("info-box2");
            $("#rfp_form").removeClass("submitrfp")
        } else {
            $(".b-notification-bar .rfp").addClass("info-box2");
            $("#rfp_form").addClass("submitrfp")
        }
    });
});


/* - Our Product Content */
    $('#pro-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        navigation: false,
        nav: true,
        nav: false,
        // navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
            }
        }
    });





