import readlineSync from 'readline-sync';
import {
  getNumber, playGame, giveAnswer, greeting, checkPrime,
} from '../index.js';

const playPrimeGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const playRound = () => {
    const number = getNumber();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);
    const correctAnswer = checkPrime(number);
    return giveAnswer(userAnswer, correctAnswer, userName);
  };
  playGame(playRound, userName);
};
export default playPrimeGame;
