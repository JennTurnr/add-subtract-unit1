function plusButton() {
	
	//get the values of x and y
	var x = parseInt($('#x').val(),10);
	var y = parseInt($('#y').val(),10);

	// If a non-integer is entered
	if (isNaN(x)) {
		prompt("Please type in a number");
		$('#x').val('');
		return false;	
	}


	if (isNaN(y)) {
		prompt("Please type in a number");
		$('#y').val('');
		return false;
	}

	// add the values
	var answer =  x + y;

	// update the answer to the page
	$('.answers').html(x + "+" + y + " is " + answer);


	// clear the value field
	$('#x').val('');
	$('#y').val('');
	event.preventDefault();


}


function minusButton() {

	// get the values of x and y
	var x1 = parseInt($('#x').val(),10);
	var y1 = parseInt($('#y').val(),10);

	// If not an integer
	if (isNaN(x1)) {
		prompt("Please type in a number");
		$('#x1').val('');
		return false;
		}


	if (isNaN(y1)) {
		prompt("Please type in a number");
		$('#y1').val('');
		return false;
	}
	

	// subtract the values
	var answer2 = x1 - y1;

	// update the answer to the page
	$('.answers').html(x1 + "-" + y1 + " is " + answer2);

	// clear the value field
	$('#x').val('');
	$('#y').val('');
	event.preventDefault();

}


// Function calls
$('#minus').click(minusButton);
$('#plus').click(plusButton);