//var $ = require("jquery");

var clock;

$(document).ready(function () {


    //clock counter

    var clock;

    var date = new Date(2017, 12, 1);
    var now = new Date();
    var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

    var clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });

    //			clock = $('.clock').FlipClock({
    //		        clockFace: 'DailyCounter',
    //		        autoStart: false,
    //		        callbacks: {
    //		        	stop: function() {
    //		        		$('.message').html('Время акции вышло (')
    //		        	}
    //		        }
    //		    });
    //				    
    //		    clock.setTime(200000);
    //		    clock.setCountdown(true);
    //		    clock.start();
    //    


    //nav-bar
    $(".menu_bar").on("click", function (e) {
        e.preventDefault();
        $(".main-navigation").toggleClass("open");
    });
    $(".link-anchor").on("click", function () {
        $(".main-navigation").toggleClass("open");
    })
    //  $(window).on("resize", function(){
    //      console.log($( document ).width());
    //      console.log($( window ).width());
    //      if ($( document ).width() > 1000) {
    //         $(".main-navigation").removeClass("open");
    //     }
    //})


    //   $(window).on("scroll", function () {
    //        var heightt= $("header").height();
    //         $(".main-navigation").css("top", heightt);
    //     });

    //add preloader of scrolling
    $("<div id='contPreloader'><div id='scrollPreload'></div></div>").prependTo($("body"));
    $(window).scroll(function () {
        var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#scrollPreload").width(ratio + "%");
    });


    // temp - change view of graphic "How we work"
    $("#arrowGraph").on("click", function () {
        $(".container_graph .text").toggleClass("arrow50");
        console.log("swssw");
    });

    // change header style by scrolling
    $(window).on("scroll", function () {
        var heightt;
        if ($(this).scrollTop() > 77) {
            // $("header .logo").css("margin", "0px");
            $("header").css("background", "rgba(255,255,255,.85)");
            heightt = $("header").height();
            //       $(".main-navigation").css("top", heightt);
            //$(".main-navigation").css("top", "10px")
        } else {
            //$("header .logo").css("margin", "");
            $("header").css("background", "");
            heightt = $("header").height();
            //        $(".main-navigation").css("top", heightt);
        }
    });



    // inner anchor-links
    $('a[data-target^="anchor"], [data-target^="anchor"] ').on("click.smoothscroll", function () {
        var target = $(this).attr("href"),
            bl_top = $(target).offset().top - 56;
        $('body, html').animate({
            scrollTop: bl_top
        }, 700);
        return false;
    });


    // buttton UP
    // button arrow to UP

    $("body").append("<button class='btn_up'/>");

    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if ($(window).scrollTop() > 50) {
            $(".btn_up").addClass("activeB");
        } else {
            $(".btn_up").removeClass("activeB");
        }

    });

    $(".btn_up").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass("activeB");
        $("body").animate({
            'scrollTop': 0
        }, 800);
        $("html").animate({
            'scrollTop': 0
        }, 800);

    });

    // heightlite nav links by scrolling
    $(document).scroll(function () {

        navigationAnchors(1);
        navigationAnchors(2);
        navigationAnchors(3);
        navigationAnchors(4);
        navigationAnchors(5);
        navigationAnchors(6);
        navigationAnchors(7);
        navigationAnchors(8);
        navigationAnchors(9);

        function navigationAnchors(n) {
            if (($(`[data-pos='pos-${n}']`).offset().top - $(window).scrollTop()) - 300 < 0) {
                if (!$(`[data-pos='pos-${n}']`).next().offset().top - $(window).scrollTop() - 300 < 0) {
                    $(`nav a.link-${n}`).parent().siblings().children().removeClass('activeNavLink');
                    //                    console.dir($(`.nav a.link-${n}`).parent().siblings());
                    $(`nav a.link-${n}`).addClass('activeNavLink');
                } else {
                    $(`nav a.link-${n}`).removeClass('activeNavLink');
                }
            } else {
                $(`nav a.link-${n}`).removeClass('activeNavLink');
            }
        }
    });




});
