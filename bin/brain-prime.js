#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumberCeil100 } from '../src/index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const playRound = () => {
  const number = getNumberCeil100();
  const userAnswer = readlineSync.question(`Question: ${number} `);
  console.log(`Your answer: ${userAnswer}`);
  let correctAnswer;
  for (let i = Math.floor(number / 2); i > 1; i -= 1) {
    if (number === 2 || number === 3) {
      correctAnswer = 'yes';
      break;
    } else if (number < 2 || number % i === 0 ) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes'
    }
  }
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  } 
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};
const playGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log('Congratulations, ' + userName + '!');
};
playGame();