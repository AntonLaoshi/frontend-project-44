#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getNumber, playGame, giveAnswer, greeting,
} from '../index.js';

const userName = greeting();
console.log('What is the result of the expression?');
const operators = ['+', '-', '*'];
const playCalcGame = () => {
  const getCorrect = (num1, num2, index) => {
    let correct;
    switch (operators[index]) {
      case '+':
        correct = num1 + num2;
        break;
      case '-':
        correct = num1 - num2;
        break;
      default:
        correct = num1 * num2;
    }
    return correct;
  };
  const playRound = () => {
    const number1 = getNumber(0, 20);
    const number2 = getNumber(0, 20);
    const selectedOperatorIndex = Math.floor(Math.random() * operators.length);
    const correctAnswer = getCorrect(number1, number2, selectedOperatorIndex);
    const userAnswer = readlineSync.question(`Question: ${number1} ${operators[selectedOperatorIndex]} ${number2} `);
    console.log(`Your answer: ${userAnswer}`);
    return giveAnswer(Number(userAnswer), correctAnswer, userName);
  };
  playGame(playRound, userName);
};
export default playCalcGame;
