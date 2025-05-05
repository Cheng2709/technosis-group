$(document).ready(function() {
    // grab the initial top offset of the navigation 
    var stickyNavTop = $('.navbar').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

 
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
});

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
};
 

$("ul li.dropdown").on({
    mouseenter: function (event) {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    },
    mouseleave: function (event) {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    }
});


//document.querySelector('video').playbackRate = 0.5;
