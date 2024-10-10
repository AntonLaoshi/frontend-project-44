#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumberCeil100, playGame, giveAnswer } from '../index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
export const playPrimeGame = () => {
  const playRound = () => {
    const number = getNumberCeil100();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);
    let correctAnswer;
    if (number === 2 || number === 3) {
      correctAnswer = 'yes';
    } else if (number < 2) {
      correctAnswer = 'no';
    } else {
      for (let i = Math.round(number / 2); i > 1; i -= 1) {
        if (number % i === 0) {
          correctAnswer = 'no';
          break;
        } else {
          correctAnswer = 'yes';
        }
      }
    }
    return giveAnswer(userAnswer, correctAnswer, userName);
  };
  playGame(playRound, userName);
};
