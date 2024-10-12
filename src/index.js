#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const playGame = (fn, name) => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = fn();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const giveAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};
