
var questionCounter = 20;

var fullname = document.getElementById("fullname").value;
var phoneNumber = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var gender = document.getElementById("gender").value;
var age = docment.getElementById("age").value;

function submitQuiz(){
	var elems = document.getElementsByClassName('stat');
	var myLength = elems.length,
	total = 0;

	for (var i = 0; i < myLength; ++i) {
		total += parseInt(elems[i].options[elems[i].selectedIndex].value * 1,10);
	}
	var showScore = "Your Score: " + total +"/" + questionCounter;

	document.getElementById('userInput').value = showScore;
	
}

$(document).ready(function() {

	$('#submitButton').change(function() {
		$(this).addClass('hide');
	});

});
