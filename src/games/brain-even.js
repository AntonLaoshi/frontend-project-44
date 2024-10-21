import readlineSync from 'readline-sync';
import {
  getNumber, playGame, checkEven,
} from '../index.js';


const playEvenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const playRound = () => {
    const number = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);
    const correctAnswer = checkEven(number);
    return [userAnswer, correctAnswer];
  };
  playGame(playRound, rule);
};

export default playEvenGame;
