import readlineSync from 'readline-sync';
import {
  getNumber, playGame, giveAnswer, greeting,
} from '../index.js';

const playProgressionGame = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const getProg = () => {
    const array = [];
    let start = getNumber();
    const minIncrement = 1;
    const maxIncrement = 10;
    const increm = getNumber(minIncrement, maxIncrement);
    for (let i = 0; i < 10; i += 1) {
      array.push(start);
      start += increm;
    }
    return array;
  };
  const playRound = () => {
    const currentProgression = getProg();
    const blankIndex = getNumber(0, currentProgression.length);
    const correctAnswer = currentProgression[blankIndex];
    currentProgression[blankIndex] = '..';
    const userAnswer = readlineSync.question(`Question: ${currentProgression.join(' ')} `);
    console.log(`Your answer: ${userAnswer}`);
    return giveAnswer(Number(userAnswer), correctAnswer, userName);
  };
  playGame(playRound, userName);
};
export default playProgressionGame;
