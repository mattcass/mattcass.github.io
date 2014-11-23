

// MENU ACTIVATION
$(".menu-link").click(function(){
        $(".nav").toggleClass("active");
    });

$(".close").click(function(){
        $(".nav").toggleClass("active");
    });


// STICKY STUFF
if ( $(window).width() > 1025) {
    $(".sticky").stick_in_parent();
};

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


