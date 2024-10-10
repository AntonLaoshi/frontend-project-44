#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumberCeil100, playGame, giveAnswer } from '../index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');
export const playGcdGame = () => {
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
    return giveAnswer(Number(userAnswer), correctAnswer, userName);
  };
  playGame(playRound, userName);
};
