$(document).ready(function() {
	
	//create divs using loop
	for (var i = 0; i < 255; i++) {
		 $('.grid-div:first-child').clone().appendTo('#wrapper');
	}
	
	$('.grid-div').mouseenter(function() {
		$(this).css('opacity', '0');
		$(this).css('background-color', '#d4937d');
		
	});
	
	$('.grid-div').mouseleave(function() {
		$(this).animate({'opacity': 100}, 3000);
	});
	
});