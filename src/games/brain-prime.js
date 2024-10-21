import readlineSync from 'readline-sync';
import { getNumber, playGame } from '../index.js';

const playPrimeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const checkPrime = (num) => {
    const isPrime = () => {
      switch (num) {
        case 2:
          return true;
        case 3:
          return true;
        case num < 2:
          return false;
        default:
          for (let i = Math.round(num / 2); i > 1; i -= 1) {
            if (num % i === 0) {
              return false;
            }
          }
          return true;
      }
    };
    return (isPrime(num) ? 'yes' : 'no');
  };

  const playRound = () => {
    const number = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);
    const correctAnswer = checkPrime(number);
    return [userAnswer, correctAnswer];
  };
  playGame(playRound, rule);
};
export default playPrimeGame;
