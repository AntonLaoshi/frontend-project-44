#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumber100, giveAnswer, playGame } from '../index.js';


export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const playEvenGame = () => { 
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
    return giveAnswer(userAnswer, correctAnswer, userName);
  };
  playGame(playRound, userName);
};
