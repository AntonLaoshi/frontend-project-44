#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getNumber, giveAnswer, playGame, greeting
} from '../index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const playEvenGame = () => {
  const isEven = (num) => {
    switch (num % 2) {
      case 0:
        return 'yes';
      default:
        return 'no';
    }
  };
  const playRound = () => {
    const number = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer.toLowerCase()}`);
    const correctAnswer = isEven(number);
    return giveAnswer(userAnswer, correctAnswer, userName);
  };
  playGame(playRound, userName);
};

export default playEvenGame;
