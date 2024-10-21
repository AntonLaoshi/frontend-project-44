import readlineSync from 'readline-sync';
import {
  getNumber, playGame, checkPrime,
} from '../index.js';

const playPrimeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
