$(document).ready(function() {
	
	//hide div until after prompt
	$('.grid-div').hide();
	
	$('#button').click(function() {
		//clear previous set of divs
		$('#grid-container').html('<div class="grid-div"></div>');
		$('.grid-div').hide();
		//set size of divs based on user input
		var userNumberOfSquares = prompt("How many squares per side would you like the grid to be?");
		$('.grid-div').show();
		var divSize = 800 / userNumberOfSquares;
		$('.grid-div').css("width", divSize);
		$('.grid-div').css("height", divSize);
		var loopsNeededToSquare = userNumberOfSquares * userNumberOfSquares;
		
		//create divs using loop
		for (var i = 0; i < loopsNeededToSquare - 1; i++) {
			 $('.grid-div:first-child').clone().appendTo('#grid-container');
		}
		
		$('.grid-div').mousedown(function() {
			
			$(this).css('background-color', '#d4937d');
			
			$('.grid-div').mouseenter(function() {
				$(this).css('background-color', '#d4937d');
			});
			
		});
		
		$('.grid-div').mouseup(function() {
			
			$('.grid-div').off('mouseenter');
			$('.grid-div').off('mouseleave');
			
		});
		

	
	});

	
});