import readlineSync from 'readline-sync';
import {
  getNumber, playGame,
} from '../index.js';

const playProgressionGame = () => {
  const rule = 'What number is missing in the progression?';
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
    const blankIndex = getNumber(0, currentProgression.length - 1);
    const correctAnswer = currentProgression[blankIndex];
    currentProgression[blankIndex] = '..';
    const userAnswer = readlineSync.question(`Question: ${currentProgression.join(' ')} `);
    console.log(`Your answer: ${userAnswer}`);
    return [Number(userAnswer), correctAnswer];
  };
  playGame(playRound, rule);
};
export default playProgressionGame;
