#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumber20, playGame, giveAnswer } from '../index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
const operators = ['+', '-', '*'];

export const playCalcGame = () => {
  const playRound = () => {
    const number1 = getNumber20();
    const number2 = getNumber20();
    const selectedOperatorIndex = Math.floor(Math.random() * operators.length);
    let correctAnswer;
    if (operators[selectedOperatorIndex] === '+') {
      correctAnswer = number1 + number2;
    } else if (operators[selectedOperatorIndex] === '-') {
      correctAnswer = number1 - number2;
    } else {
      correctAnswer = number1 * number2;
    }
    const userAnswer = readlineSync.question(`Question: ${number1} ${operators[selectedOperatorIndex]} ${number2} `);
    console.log(`Your answer: ${userAnswer}`);
    return giveAnswer(Number(userAnswer), correctAnswer, userName);
  };
  playGame(playRound, userName);
};
