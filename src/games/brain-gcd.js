import readlineSync from 'readline-sync';
import { getNumber, playGame } from '../index.js';

const playGcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const getCorrect = (minNum, num1, num2) => {
    let correct;
    for (let i = minNum; i > 0; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        correct = i;
        break;
      }
    }
    return correct;
  };

  const playRound = () => {
    const number1 = getNumber();
    const number2 = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number1} ${number2} `);
    console.log(`Your answer: ${userAnswer}`);
    const minNumber = Math.min(number1, number2);
    const correctAnswer = getCorrect(minNumber, number1, number2);
    return [Number(userAnswer), correctAnswer];
  };
  playGame(playRound, rule);
};
export default playGcdGame;
