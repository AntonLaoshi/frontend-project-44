#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumber100 } from '../src/index.js';

export var userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export var greeting = console.log('Hello, ' + userName + '!');

console.log('What number is missing in the progression?');
const playRound = () => {
    const blankIndex = Math.floor(Math.random() * 10);
    const increment = Math.ceil(Math.random() * 10);
    const progression = [];
    let initial = getNumber100();
    for (let i = 0; i < 10; i++) {
            progression.push(initial);
            initial += increment;
        }
    let correctAnswer = progression[blankIndex];  
    progression[blankIndex] = '..';
    const userAnswer = readlineSync.question('Question: ' + progression.join(' ') + ' ');
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
        return;
      }
    }
    console.log('Congratulations, ' + userName + '!');
  };
  
  playGame();