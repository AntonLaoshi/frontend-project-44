#!/usr/bin/env node
import readlineSync from 'readline-sync';

export var userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export var greeting = console.log('Hello, ' + userName + '!');
console.log('What is the result of the expression?');
const getNumber = () => Math.round(Math.random() * 20);
const operators = [{
    sign: '+',
    method: function(a, b){return a + b}
}, {
    sign: '-',
    method: function(a, b){return a - b}
}, {
    sign: '*',
    method: function(a, b){return a * b}
}
];
const playRound = () => {
    let number1 = getNumber();
    let number2 = getNumber();
    let selectedOperatorIndex = Math.floor(Math.random() * operators.length);
    const correctAnswer = operators[selectedOperatorIndex].method(number1, number2);
    const userAnswer = readlineSync.question('Question: ' + number1 + ' ' + operators[selectedOperatorIndex].sign + ' ' + number2 + ' ');
    console.log('Your answer: ' + userAnswer);
    if (Number(userAnswer) === correctAnswer) {
        console.log('Correct!');
        return true;
    } 
    console.log("'" + userAnswer + "'" + " is wrong answer ;(. Correct answer was '" + correctAnswer + "'.\nLet's try again, " + userName + "!");
    return false;
};

const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();

    if (!isCorrect) {
      return false;
    }
  }
  console.log('Congratulations, ' + userName + '!')
};

playGame();