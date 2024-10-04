#!/usr/bin/env node
import readlineSync from 'readline-sync';

export var userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export var greeting = console.log('Hello, ' + userName + '!');

console.log('Find the greatest common divisor of given numbers.');

const getNumber = () => Math.ceil(Math.random() * 100);

const playRound = () => {
    const number1 = getNumber();
    const number2 = getNumber();
    const userAnswer = readlineSync.question('Question: ' + number1 + ' ' + number2 + ' ');
    console.log('Your answer: ' + userAnswer);
    let minNumber;
    const correctAnswer = () => {
        if (number1 > number2) {
            minNumber = number2;
        } else {
        minNumber = number1;
        }
        for (let i = minNumber; i > 0; i--) {
            if (number1 % i === 0 && number2 % i === 0) {
            return i;
            }
        }
    }
    if (Number(userAnswer) === correctAnswer()) {
        console.log('Correct!');
        return true;
    } 
    console.log("'" + userAnswer + "'" + " is wrong answer ;(. Correct answer was '" + correctAnswer() + "'.\nLet's try again, " + userName + "!");
    return false;
};

const playGame = () => {
    for (let i = 0; i < 3; i++) {
      const isCorrect = playRound();
      
      if (!isCorrect) {
        return;
      }
    }
    console.log('Congratulations, ' + userName + '!');
  };
  
  playGame();
