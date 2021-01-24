'use strict';

var userName = prompt('Hello, and thank you for taking my quiz! What is your name?');

var correctAnswer = 0;

alert('Please answer the following "yes or no" questions...');

function live() {
  var answerLive = prompt('Do I live in Washington?').toLowerCase();

  if (answerLive === 'no' || answerLive === 'n') {
    alert('Correct! I live in Oregon.');
    correctAnswer++;

  } else {
    alert('Nope! I live in Oregon.');
  }
}
live();

function code() {
  var answerCode102 = prompt('Did I take Code 102?').toLowerCase();

  if (answerCode102 === 'no' || answerCode102 === 'n') {
    alert('Correct! I skipped from 101 to 201.');
    correctAnswer++;

  } else {
    alert('Negative - I skipped code 102.');
  }
}
code();

function color() {
  var answerColor = prompt('Is my favorite color green?').toLowerCase();

  if (answerColor === 'no' || answerColor === 'n') {
    alert('Correct! My favorite color is yellow.');
    correctAnswer++;

  } else {
    alert('Nope, my favorite color is yellow.');
  }
}
color();

function pets() {
  var answerPets = prompt('Do I have any pets?').toLowerCase();

  if (answerPets === 'yes' || answerPets === 'y') {
    alert('Yep! I have 2 cats.');
    correctAnswer++;

  } else {
    alert('Incorrect. I have 2 cats.');
  }
}
pets();

function coffee() {
  var answerCoffee = prompt('Do I like coffee?').toLowerCase();

  if (answerCoffee === 'yes' || answerCoffee === 'y') {
    alert('Absolutely. Coffee is life.');
    correctAnswer++;

  } else {
    alert('*GASP* Wrong. Coffe is life.');
  }
}
coffee();

function birthday() {
  var guessLeft = 4;
  var totalGuesses = 4;
  for (var i = 0; i < totalGuesses; i++) {
    var answerNumberGuess = prompt(`Guess my January birthday! Pick a number between 1 & 31. Guesses remaining: ${guessLeft}`);
    guessLeft--;
    if (answerNumberGuess === '21') {
      console.log('You guessed my birthday is ' + answerNumberGuess);
      alert('You guessed it right!');
      correctAnswer++;
      break;
    } else if (answerNumberGuess < 21) {
      alert('Too low!');
    } else if (answerNumberGuess > 21) {
      alert('Too high!');
    }
  }
  alert('The correct answer is 21.');
}
birthday();

function movie() {
  var favMovies = ['the greatest showman', 'up', 'dead poets society'];

  var clueGuesses = 6;
  var guessCorrect = false;
  for (var j = 0; j < clueGuesses; j++) {
    var movieGuess = prompt('Can you guess one of my favorite movies?').toLowerCase();
    favMovies = ['the greatest showman', 'up', 'dead poets society'];
    for (var k = 0; k < favMovies.length; k++) {
      console.log(`k loop start ${k}`);
      if (movieGuess === favMovies[k]) {
        guessCorrect = true;
        correctAnswer++;
      }
    }
    if (guessCorrect) {
      alert(`${movieGuess} IS one of my favorite movies!`);
      break;
    } else {
      alert(`${movieGuess}...not one I was thinking of.`);
    }
  }
  alert(`The correct answers were ${favMovies[0]}, ${favMovies[1]}, and ${favMovies[2]}.`);
}
movie();

alert(`You scored ${correctAnswer} out of 7 questions correctly. Thanks again ${userName} for taking my quiz!`);
