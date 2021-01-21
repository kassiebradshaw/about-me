'use strict';

// // get username and offer greeting
var userName = prompt('Hello, and thank you for taking my quiz! What is your name?');
// alert('Hello, ' + userName + ', nice to meet you!');

var correctAnswer = 0;

alert('Please answer the following "yes or no" questions...');

// write 5 questions. they MUST accept yes or no OR y or n IN ANY CASE -case-sensitivity needs to work in every format
// examples: YES yes Yes NO no No, Y, y

// this is the function for question 1
function live() {
  // this is the prompt that asks the question
  var answerLive = prompt('Do I live in Washington?').toLowerCase();

  // this is the code to run if user answers no
  if (answerLive === 'no' || answerLive === 'n') {
    // console.log('Do I live in Washington? ' + answerLive);
    // message user will see
    alert('Correct! I live in Oregon.');
    // adds 1 to score counter
    correctAnswer++;

    // this is the code to run if user answers yes
  } else {
    // console.log('Do I live in Washington? ' + answerLive);
    // message user will see
    alert('Nope! I live in Oregon.');
  }
}
// this calls the function for question 1
live();

// this is the function for question 2
function code() {
  // this is the prompt that asks the question
  var answerCode102 = prompt('Did I take Code 102?').toLowerCase();

  // this is the code to run if user answers no
  if (answerCode102 === 'no' || answerCode102 === 'n') {
    // console.log('Did I take Code 102? ' + answerCode102);
    // message user will see
    alert('Correct! I skipped from 101 to 201.');
    // adds 1 to score counter
    correctAnswer++;

    // this is the code to run if user answers yes
  } else {
    // console.log('Did I take Code 102 ' + answerCode102);
    // message user will see
    alert('Negative - I skipped code 102.');
  }
}
// this calls the function for question 2
code();

// this is the function for question 3
function color() {
  // this is the prompt that asks the question
  var answerColor = prompt('Is my favorite color green?').toLowerCase();

  // this is the code to run if user answers no
  if (answerColor === 'no' || answerColor === 'n') {
    // console.log('Is my favorite color green? ' + answerColor);
    // message user will see
    alert('Correct! My favorite color is yellow.');
    // adds 1 to score counter
    correctAnswer++;

    // this is the code to run if user answers yes
  } else {
    // console.log('Is my favorite color green? ' + answerColor);
    // message user will see
    alert('Nope, my favorite color is yellow.');
  }
}
// this calls the function for question 3
color();

// this is the function for question 4
function pets() {
  // this is the prompt that asks the question
  var answerPets = prompt('Do I have any pets?').toLowerCase();

  // this is the code to run if user answers yes
  if (answerPets === 'yes' || answerPets === 'y') {
    // console.log('Do I have any pets? ' + answerPets);
    // message user will see
    alert('Yep! I have 2 cats.');
    // adds 1 to score counter
    correctAnswer++;

    // this is the code to run if user answers no
  } else {
    // console.log('Do I have any pets? ' + answerPets);
    // message user will see
    alert('Incorrect. I have 2 cats.');
  }
}
// this calls the function for question 4
pets();

// this is the function for question 5
function coffee() {
  // this is the prompt that asks the question
  var answerCoffee = prompt('Do I like coffee?').toLowerCase();

  // this is the code to run if user answers yes
  if (answerCoffee === 'yes' || answerCoffee === 'y') {
    // console.log('Do I like coffee? ' + answerCoffee);
    // message user will see
    alert('Absolutely. Coffee is life.');
    // adds 1 to score counter
    correctAnswer++;

    // this is the code to run if user answers no
  } else {
    // console.log('Do I like coffee? ' + answerCoffee);
    // message user will see
    alert('*GASP* Wrong. Coffe is life.');
  }
}
// this calls the function for question 5
coffee();

// this is the function for question 6
function birthday() {
  // this variable states how many guesses user starts with
  var guessLeft = 4;
  // this variable states how many turns I want the user to have
  var totalGuesses = 4;
  // this is the loop that runs the question as many times as I have totalGuesses variable set to (currently 4)
  for (var i = 0; i < totalGuesses; i++) {
    // this is the prompt that asks the quetion
    var answerNumberGuess = prompt(`Guess my January birthday! Pick a number between 1 & 31. Guesses remaining: ${guessLeft}`);
    // this decrements how many guesses the user has left after each time the question prompt is run
    guessLeft--;

    // this is the code to run if answer is guessed correctly
    if (answerNumberGuess === '21') {
      console.log('You guessed my birthday is ' + answerNumberGuess);
      alert('You guessed it right!');
      // adds 1 to score counter
      correctAnswer++;
      // breaks out of the loop after correct answer
      break;

      // code to run if the guess is too low
    } else if (answerNumberGuess < 21) {
      // console.log('You guessed my birthday is ' + answerNumberGuess);
      //message user will see
      alert('Too low!');

      // code to run if the guess is too high
    } else if (answerNumberGuess > 21) {
      // console.log('You guessed my birthday is ' + answerNumberGuess);
      // message user will see
      alert('Too high!');
    }
  }
  // tells user correct answer after loop is completed, regardless of if they answered correctly or not
  alert('The correct answer is 21.');
}
// this calls the function for question 6
birthday();

// this is the function for question 7
function movie() {
  // my array of possible correct answers
  // var favMovies = ['the greatest showman', 'up', 'dead poets society'];

  var clueGuesses = 6;
  var guessCorrect = false;
  // this loop runs as mnay times = variable clueGuesses
  for (var j = 0; j < clueGuesses; j++) {
    var movieGuess = prompt('Can you guess one of my favorite movies?').toLowerCase();

    // this loop runs the user's guess through the whole array of my favorite movies, only breaking if their guess matches something in the array
    var favMovies = ['the greatest showman', 'up', 'dead poets society'];
    for (var k = 0; k < favMovies.length; k++) {

      console.log(`start of loop ${k}`);
      // if they guess correctly
      if (movieGuess.toLowerCase === favMovies[k].toLowerCase()) {
        console.log(`if guess matches index ${movieGuess}`);
        // guessCorrect variable changes to true
        guessCorrect = true;
        // loop ends
      }
    }
    // if they guessed correctly, they will be alerted and the main question loop will break
    if (guessCorrect) {
      alert(`${movieGuess} IS one of my favorite movies!`);
      break;
    } else {
      //   console.log(movieGuess + ' ... not one I was thinking of.');
      alert(`${movieGuess}... not one I was thinking of.'`);
    }
  }
  alert(`The correct answers were ${favMovies[0]}, ${favMovies[1]}, and ${favMovies[2]}.`);
}
// this calls the function for question 7
movie();

// this displays a farewell message telling user (by name) how many questions they got right
alert(`You scored ${correctAnswer} out of 7 questions correctly. Thanks again ${userName} for taking my quiz!`);
