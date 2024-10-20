import readlineSync from 'readline-sync';
import {
  getNumber, giveAnswer, playGame, greeting,
  checkEven,
} from '../index.js';

const playEvenGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const playRound = () => {
    const number = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer.toLowerCase()}`);
    const correctAnswer = checkEven(number);
    return giveAnswer(userAnswer, correctAnswer, userName);
  };
  playGame(playRound, userName);
};

export default playEvenGame;
