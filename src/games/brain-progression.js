#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  getNumber, playGame, giveAnswer, greeting
} from '../index.js';

const userName = greeting();
console.log('What number is missing in the progression?');
const playProgressionGame = () => {
  const playRound = () => {
    const blankIndex = Math.floor(Math.random() * 10);
    const increment = Math.ceil(Math.random() * 10);
    const progression = [];
    let initial = getNumber();
    for (let i = 0; i < 10; i += 1) {
      progression.push(initial);
      initial += increment;
    }
    const correctAnswer = progression[blankIndex];
    progression[blankIndex] = '..';
    const userAnswer = readlineSync.question(`Question: ${progression.join(' ')} `);
    console.log(`Your answer: ${userAnswer}`);
    return giveAnswer(Number(userAnswer), correctAnswer, userName);
  };
  playGame(playRound, userName);
};
export default playProgressionGame;
