'use strict';

// // get username and offer greeting
var userName = prompt('Hello, and thank you for taking my quiz! What is your name?');
// alert('Hello, ' + userName + ', nice to meet you!');

var correctAnswer = 0;

alert('Please answer the following "yes or no" questions...');

// write 5 questions. they MUST accept yes or no OR y or n IN ANY CASE -case-sensitivity needs to work in every format
// examples: YES yes Yes NO no No, Y, y

// this is question 1
function live(){
  var answerLive = prompt('Do I live in Washington?').toLowerCase();

  if (answerLive === 'no' || answerLive === 'n') {
    // console.log('Do I live in Washington? ' + answerLive);
    // if answer is no, this will show up
    alert('Correct! I live in Oregon.');
    correctAnswer++;
  } else {
    // console.log('Do I live in Washington? ' + answerLive);
    // otherwise, this will show up
    alert('I live in Oregon.');
  }

}
live();
// this is question 2
function code(){
  var answerCode102 = prompt('Did I take Code 102?').toLowerCase();

  if (answerCode102 === 'no' || answerCode102 === 'n') {
    // console.log('Did I take Code 102? ' + answerCode102);
    // if answer is no, this will show up
    alert('Correct! I came to Code 201 from Code 101.');
    correctAnswer++;
  } else {
    // console.log('Did I take Code 102 ' + answerCode102);
    // otherwise, this will show up
    alert('I came to Code 201 from Code 101.');
  }

}
code();
// this is question 3
var answerColor = prompt('Is my favorite color green?').toLowerCase();

if (answerColor === 'no' || answerColor === 'n') {
  // console.log('Is my favorite color green? ' + answerColor);
  // if answer is no, this will show up
  alert('Correct! My favorite color is yellow.');
  correctAnswer++;
} else {
  // console.log('Is my favorite color green? ' + answerColor);
  // otherwise, this will show up
  alert('My favorite color is yellow.');
}

// this is question 4
var answerPets = prompt('Do I have any pets?').toLowerCase();

if (answerPets === 'yes' || answerPets === 'y') {
  // console.log('Do I have any pets? ' + answerPets);
  // if answer is yes, this will show up
  alert('Yep! I have 2 cats.');
  correctAnswer++;
} else {
  // console.log('Do I have any pets? ' + answerPets);
  // otherwise, this will show up
  alert('I have 2 cats.');
}

// this is question 5
var answerCoffee = prompt('Do I like coffee?').toLowerCase();

if (answerCoffee === 'yes' || answerCoffee === 'y') {
  // console.log('Do I like coffee? ' + answerCoffee);
  // if answer is yes, this will show up
  alert('Absolutely. Coffee is life.');
  correctAnswer++;
} else {
  // console.log('Do I like coffee? ' + answerCoffee);
  // otherwise, this will show up
  alert('Coffe is life.');
}

// // this is question 6
var guessLeft = 4;
console.log('console log outside of loop'+ guessLeft);
for (var i = 0; i < 4; i++) {
  guessLeft--;
  console.log('console log inside of loop' + guessLeft);
  var answerNumberGuess = prompt(`Guess my January birthday! Pick a number between 1 & 31. You have ${guessLeft} guesses.`);
  // if answer is guessed correctly
  if(answerNumberGuess === '21') {
    console.log('You guessed my birthday is ' + answerNumberGuess);
    alert('You guessed it right!');
    correctAnswer++;
    break;
    // if the guess is too low
  } else if (answerNumberGuess < 21 ) {
    console.log('You guessed my birthday is ' + answerNumberGuess);
    alert('Too low! Guess again.');
    // if the guess is too high
  } else if (answerNumberGuess > 21 ) {
    console.log('You guessed my birthday is ' + answerNumberGuess);
    alert('Too high! Guess again.');
  }
}
alert('The correct answer is 21.');

// // this is question 7

// // array of possible correct answers
var favMovies = ['The Greatest Showman', 'Up', 'Dead Poets Society', 'whiplash'];

var clueGuesses = 6;
for (var j = 0; j < clueGuesses; j++) {
  var movieGuess = prompt('Can you guess one of my favorite movies?').toLowerCase();
  // if answer is guessed correctly

  for (var k = 0; k < favMovies.length; k++) {
    console.log(`k: ${k}`);

    console.log(`movieGuess: ${movieGuess}`);
    console.log(`favMovies: ${favMovies[j]}`);
    if(movieGuess === favMovies[j].toLowerCase()) {
      console.log('hit');
      console.log(`k: ${k}`);
    }
  }

  if(movieGuess === favMovies[0].toLowerCase() || movieGuess === favMovies[1].toLowerCase() || movieGuess === favMovies[2].toLowerCase()) {
    console.log(movieGuess + ' IS one of my favorites!');
    alert(movieGuess + ' IS one of my favorites!');
    correctAnswer++;
    break;
    // if the guess is wrong
  } else {
    console.log(movieGuess + ' ... not one I was thinking of.');
    alert(movieGuess + ' ... not one I was thinking of.');
  }
}
alert(`The correct answers were ${favMovies[0]}, ${favMovies[1]}, and ${favMovies[2]}.`);

alert(`You scored ${correctAnswer} out of 7 questions correctly.`);

//final message to user
alert('Thanks again ' + userName + ' for taking my quiz!');
