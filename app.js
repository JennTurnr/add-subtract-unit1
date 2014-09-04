
/* function add(x,y) {
	var total = x + y;
	return total;
}

function subtract(x,y) {
	var total2 = x - y;
	return total2;
} */

function addItems(x,y) {
	var addition = $('x' + 'y').val();
	$('.answers').append('<p>'+addition+'</p>');
	$('x' + 'y').val('');
	event.preventDefault();
}

function subtractItems(x,y) {
	var subtract = $('x' - 'y').val();
	$('answers').append('<p>'+addition+'</p>');
	$('x' + 'y').val('');
	event.preventDefault();
}

$(function() {
$('#plus').on('click', addItems);
$('#minus').on('click', subtractItems);


});

/* 
function addX() {
	var getX = $('x').val();
	$('.answers').append('<p>'+getX+'</p>');
	$('x').val('');
	event.preventDefault();
}

function addY() {
	var getY=$('y').val();
	$('answers').append('<p>'+getY+'</p>');
	$('y').val('');
	event.preventDefault();
}

//var addition = $('item-x' + 'item-y');
//var subtract = $('item-x' - 'item-y');



$(function() {
$('plus').on('click', add, addX);
$('minus').on('click', subtract, addY);


});

//function add(x, y) {
  //  var total = x + y;
  //  return total;
// }

*/