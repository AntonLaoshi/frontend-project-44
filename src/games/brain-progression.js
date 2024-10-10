#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getNumber100, playGame, giveAnswer } from '../index.js';

export const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const greeting = console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');
export const playProgressionGame = () => {
  const playRound = () => {
    const blankIndex = Math.floor(Math.random() * 10);
    const increment = Math.ceil(Math.random() * 10);
    const progression = [];
    let initial = getNumber100();
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
