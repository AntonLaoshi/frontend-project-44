#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumber20, playGame } from '../src/index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
const operators = [{
  sign: '+',
  operation: function (a, b) { return a + b },
}, {
  sign: '-',
  operation: function (a, b)  {return a - b },
}, {
  sign: '*',
  operation: function (a, b) { return a * b },
}
];
const playRound = () => {
  let number1 = getNumber20();
  let number2 = getNumber20();
  let selectedOperatorIndex = Math.floor(Math.random() * operators.length);
  const correctAnswer = operators[selectedOperatorIndex].operation(number1, number2);
  const userAnswer = readlineSync.question('Question: ' + number1 + ' ' + operators[selectedOperatorIndex].sign + ' ' + number2 + ' ');
  console.log('Your answer: ' + userAnswer);
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    return true;
  } 
  console.log("'" + userAnswer + "'" + " is wrong answer ;(. Correct answer was '" + correctAnswer + "'.\nLet's try again, " + userName + "!");
  return false;
};
playGame(playRound, userName);