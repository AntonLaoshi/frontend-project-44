#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumber100 } from '../src/index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const playRound = () => {
  const number = getNumber100();
  const userAnswer = readlineSync.question(`Question: ${number} `);
  console.log(`Your answer: ${userAnswer.toLowerCase()}`);
  let correctAnswer;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
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