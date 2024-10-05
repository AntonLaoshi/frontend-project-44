#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumberCeil100 } from '../src/index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');
const playRound = () => {
  const number1 = getNumberCeil100();
  const number2 = getNumberCeil100();
  const userAnswer = readlineSync.question(`Question: ${number1} ${number2} `);
  console.log(`Your answer: ${userAnswer}`);
  let minNumber;
  if (number1 > number2) {
    minNumber = number2;
  } else {
    minNumber = number1;
  }
  let correctAnswer;
  for (let i = minNumber; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};
const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log('Congratulations, ' + userName + '!');
};
playGame();
