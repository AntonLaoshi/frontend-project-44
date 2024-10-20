import readlineSync from 'readline-sync';
import {
  getNumber, playGame, giveAnswer, greeting,
} from '../index.js';

const playGcdGame = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const playRound = () => {
    const getCorrect = (minNum, num1, num2) => {
      for (let i = minNum; i > 0; i -= 1) {
        if (num1 % i === 0 && num2 % i === 0) {
          return i;
        }
      }
    };
    const number1 = getNumber();
    const number2 = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number1} ${number2} `);
    console.log(`Your answer: ${userAnswer}`);
    const minNumber = Math.min(number1, number2);
    const correctAnswer = getCorrect(minNumber, number1, number2);
    return giveAnswer(Number(userAnswer), correctAnswer, userName);
  };
  playGame(playRound, userName);
};
export default playGcdGame;
