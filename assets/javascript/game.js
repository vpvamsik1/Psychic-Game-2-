var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0; 
var GuessesLeft = 9;

document.onkeyup = function () {

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];  
  var userGuess = event.key; 
  var yourGuess = userGuess;
  var resetGuesses = function () {
  GuessesLeft = 9; // reset our model
  document.querySelector("#Guesses").innerHTML = ''; // reset our view
    }
  
  if (userGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]) {
    
    if (userGuess === computerGuess) {
      wins++;
      resetGuesses();
    }
    else if (GuessesLeft == 0) {
      losses++;
      resetGuesses();
    }
    else if (yourGuess.length < 0) {
    }
    else {
      GuessesLeft--;
    }
  var score =
  "<p>" + "Wins: " + wins + "</p>" +
  "<p>" + "Losses: " + losses + "</p>" +
  "<p>" + "Guesses Left: " + GuessesLeft + "</p>";
  document.querySelector("#game").innerHTML = score;

  var yourGuess = " " + yourGuess;
  document.querySelector("#Guesses").innerHTML += yourGuess;
  }
}