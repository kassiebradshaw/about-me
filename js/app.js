'use strict';

// // get username and offer greeting
// var userName = prompt('Hello, and thank you for taking my quiz! What is your name?');
// alert('Hello, ' + userName + ', nice to meet you!');

// alert('Please answer the following "yes or no" questions...');

// // write 5 questions. they MUST accept yes or no OR y or n IN ANY CASE -case-sensitivity needs to work in every format
// // examples: YES yes Yes NO no No, Y, y

// // this is question 1
// var answerLive = prompt('Do I live in Washington?').toLowerCase();

// if (answerLive === 'no' || answerLive === 'n') {
//   // console.log('Do I live in Washington? ' + answerLive);
//   // if answer is no, this will show up
//   alert('Correct! I live in Oregon.');
// } else {
//   // console.log('Do I live in Washington? ' + answerLive);
//   // otherwise, this will show up
//   alert('I live in Oregon.');
// }

// // this is question 2
// var answerCode102 = prompt('Did I take Code 102?').toLowerCase();

// if (answerCode102 === 'no' || answerCode102 === 'n') {
//   // console.log('Did I take Code 102? ' + answerCode102);
//   // if answer is no, this will show up
//   alert('Correct! I came to Code 201 from Code 101.');
// } else {
//   // console.log('Did I take Code 102 ' + answerCode102);
//   // otherwise, this will show up
//   alert('I came to Code 201 from Code 101.');
// }

// // this is question 3
// var answerColor = prompt('Is my favorite color green?').toLowerCase();

// if (answerColor === 'no' || answerColor === 'n') {
//   // console.log('Is my favorite color green? ' + answerColor);
//   // if answer is no, this will show up
//   alert('Correct! My favorite color is yellow.');
// } else {
//   // console.log('Is my favorite color green? ' + answerColor);
//   // otherwise, this will show up
//   alert('My favorite color is yellow.');
// }

// // this is question 4
// var answerPets = prompt('Do I have any pets?').toLowerCase();

// if (answerPets === 'yes' || answerPets === 'y') {
//   // console.log('Do I have any pets? ' + answerPets);
//   // if answer is yes, this will show up
//   alert('Yep! I have 2 cats.');
// } else {
//   // console.log('Do I have any pets? ' + answerPets);
//   // otherwise, this will show up
//   alert('I have 2 cats.');
// }

// // this is question 5
// var answerCoffee = prompt('Do I like coffee?').toLowerCase();

// if (answerCoffee === 'yes' || answerCoffee === 'y') {
//   // console.log('Do I like coffee? ' + answerCoffee);
//   // if answer is yes, this will show up
//   alert('Absolutely. Coffee is life.');
// } else {
//   // console.log('Do I like coffee? ' + answerCoffee);
//   // otherwise, this will show up
//   alert('Coffe is life.');
// }

// this is question 6
var answerNumberGuess = prompt('Guess my January birthday! Pick a number between 1 & 31. You will have 4 guesses.');
for (var i = 1; i < 5; i++) {
  if (i === 4) {
    alert('Nice try, the correct answer is 21.');
    break;
  }
  if(answerNumberGuess === '21') {
    alert('You guessed it right!');
    break;
  } else if (answerNumberGuess <21 ) {
    alert('Too low! Guess again.');
  } else if (answerNumberGuess < 21 ) {
    alert('Too high! Guess again.');
  }
  answerNumberGuess = prompt('Guess my January birthday! Pick a number between 1 & 31. You will have 4 guesses.')
}


// this is question 7

//final message to user
alert('Thanks again ' + userName + ' for taking my quiz!');
