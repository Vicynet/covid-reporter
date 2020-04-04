// Copyright. All Rights Reserved
var questionCounter = 20;

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
