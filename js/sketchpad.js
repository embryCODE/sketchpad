$(document).ready(function() {
	
	//create divs using loop
	for (var i = 0; i < 255; i++) {
		 $('.grid-div:first-child').clone().appendTo('#wrapper');
	}
	
});