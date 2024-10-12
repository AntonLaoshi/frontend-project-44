#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getNumber, playGame, giveAnswer, greeting,
} from '../index.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const playPrimeGame = () => {
  const getCorrect = (num) => {
    switch (num) {
      case 2:
        return 'yes';
      case 3:
        return 'yes';
      case num < 2:
        return 'no';
      default:
        for (let i = Math.round(num / 2); i > 1; i -= 1) {
          if (num % i === 0) {
            return 'no';
          }
        }
        return 'yes';
    }
  };
  const playRound = () => {
    const number = getNumber(1, 100);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);
    const correctAnswer = getCorrect(number);
    return giveAnswer(userAnswer, correctAnswer, userName);
  };
  playGame(playRound, userName);
};
export default playPrimeGame;
