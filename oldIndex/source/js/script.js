
$(document).ready(function($) {

    // WELCOME MESSAGE TO ANY DEVELOPERS
    console.log("Sup console people.");

    // FILTER JOURNAL ENTRIES BY CATEGORY
    $('.filter').delegate('a', 'click', function (e) {
        e.preventDefault();

        $('.content').hide().filter('.' + this.href.slice(this.href.indexOf("#") + 1)).show();
    }); 

    // SMOOTH SCROLLING
    $(function() {
        $('a[href*=#]:not([href=#])').on('click', function() {

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

// end file
});
