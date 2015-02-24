$(document).ready(function($) {

    /* ====================================
        On load functions
    ==================================== */

	// Enable pusher logging - don't include this in production
    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

    var pusher = new Pusher('09642d91afaed20ce5d7');
    var channel = pusher.subscribe('tvChannel');
    channel.bind('my_event', function(data) {
      alert(data.message);
    });

    $('.apps a').hover(function(){
    	$(this).closest('.floatSize').addClass('active')
	},function(){
    	$(this).closest('.floatSize').removeClass('active');
	});

    $(function() {
        $('.choice').click(function() {
            $('.choice').removeClass('currentlyActive');

        $(this).addClass('currentlyActive');
        });
    });

    $(function() {
        $('input.name').keyup(function() {
            var user = $(this).val();
            $('span').text(user);
        });
    });


    $('a.move').click(function (e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");

        $('.done').addClass('visible');

        setTimeout(function() {
            window.location = goTo;
        }, 2500);

    });

    var search = $('.search input');

    (search).keyup(function(){
       if ( !$(this).val() ) {
        $('.searchResults').removeClass('active')
    } else {
        $('.searchResults').addClass('active')
    }
    });



});
