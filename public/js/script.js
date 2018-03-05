$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 1.3;			//Scroll time
	var scrollDistance = 140;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
// SCROLL SOURIS DOUX
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Expo.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});

$(function(){

	new WOW().init();

});

//SMOOTH SCROLL
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
      return false;
    }
  }
});

// OVERLAY JS
$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
});

// Close hamburger menu after click
jQuery(document).ready(function($) {
  $('.overlay a').click(function(){
  	$('.toggle-button').toggleClass('toggle-active');
    $('#overlay').removeClass('nav-active').css();
  });
});

jQuery(document).ready(function($) {
  $('.overlay').click(function(){
  	$('.toggle-button').toggleClass('toggle-active');
    $('#overlay').removeClass('nav-active').css();
  });
});

if ( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.wow').addClass('wow-removed').removeClass('wow');
} else {
    $('.wow-removed').addClass('wow').removeClass('wow-removed');
}