
function plusButton() {
	//get the values of x and y
	var x = parseInt($('#x').val(),10);
	var y = parseInt($('#y').val(),10);

	// add the values
	var answer =  x + y;

	// update the answer to the page
	$('.answers').html(x + "+" + y + " is " + answer);


	// clear the value field
	$('#x').val('');
	$('#y').val('');
	event.preventDefault();

	// If a non-integer is entered
	//if (isNaN(x,y)) {
	//	alert("Please enter a number");
	//}
}


function minusButton() {

	// get the values of x and y
	var x1 = parseInt($('#x').val(),10);
	var y1 = parseInt($('#y').val(),10);
	

	// subtract the values
	var answer2 = x1 - y1;

	// update the answer to the page
	$('.answers').html(x1 + "-" + y1 + " is " + answer2);

	// clear the value field
	$('#x').val('');
	$('#y').val('');
	event.preventDefault();

	// If a non-integer is entered
	//if (isNaN(x,y)) {
		//alert("Please enter a number");
	//}
}


// Function calls
$('#minus').click(minusButton);
$('#plus').click(plusButton);