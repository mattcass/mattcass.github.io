
$(document).ready(function($) {

    // WELCOME MESSAGE TO ANY DEVELOPERS
    console.log("Well hello there.");

    // MOBILE NAVIGATION
    $('.js-click').click(function() {
        $(".nav").toggleClass('active');
        $(".menu-link").toggleClass('active');
        $("main").toggleClass('active');
    });

    // FILTER JOURNAL ENTRIES BY CATEGORY
    $('.filter').delegate('a', 'click', function (event) {
    $('.content').hide().filter('.' + this.href.slice(this.href.indexOf("#") + 1)).show();
        event.preventDefault();
    }); 

    // SMOOTH SCROLLING
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 80
                        }, 1000);
                    return false;
                    }
            }
        });
    });	

// CLOSE
});
