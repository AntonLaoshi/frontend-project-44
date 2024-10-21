import readlineSync from 'readline-sync';
import { getNumber, playGame } from '../index.js';

const playEvenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const checkEven = (num) => {
    const isEven = () => (num % 2 === 0);
    return (isEven(num) ? 'yes' : 'no');
  };

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
