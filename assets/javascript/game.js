var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var guesses = [];



var wins = 0;
var losses = 0;
var guessesLeft = 10;


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft; 




document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();
  console.log(userGuess);

  if(userGuess === computerChoice){
      wins++;
      guessesLeft = 10;
      guesses = [];
      computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(computerChoice);

  }else{
      guessesLeft--;
      guesses.push(" " + userGuess);
    
  }

  if(guessesLeft === 0){
      losses++
      guessesLeft =10;
      guesses= [];
      computerChoice;
      computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(computerChoice);

  }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;  
    document.getElementById('guesses').innerHTML = "You've Guessed: " + guesses;


}