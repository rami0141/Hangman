

var wins = 0;
var guessesRemaining = 13;
var words = ["poodle", "dachshund", "retriever", "pitbull", "terrier", "coonhound", "huskie"];
var guessesSoFar = [];



// the event that sets off the function

document.onkeyup = function(event) {

var userGuess = event.key;
guessesSoFar.push(userGuess);


var randomWord = Math.floor(Math.random() * words.length);




if (userGuess === randomWord) {
	wins++;

} else {
	guessesRemaining--;
}


if (guessesRemaining === 0) {
	guessesRemaining = 13;
	guessesSoFar = [];
	losses++;
} 

 var html =
          "<p>Wins " + wins + "</p>" +
          "<p>Current Word " + losses + "</p>" +
          "<p>Number of Guesses Remaining " + guessesRemaining + "</p>" +
          "<p>Letters Already Guessed " + guessesSoFar + "</p>";

 document.querySelector("#game").innerHTML = html;
};