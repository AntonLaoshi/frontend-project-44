import readlineSync from 'readline-sync';
import { getNumber, playGame } from '../index.js';

const playCalcGame = () => {
  const rule = 'What is the result of the expression?';
  const getCorrect = (num1, num2, index, arr) => {
    switch (arr[index]) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error('Unknown operation!');
    }
  };
  const playRound = () => {
    const number1 = getNumber();
    const number2 = getNumber();
    const operators = ['+', '-', '*'];
    const selectedOperatorIndex = getNumber(0, operators.length - 1);
    const correctAnswer = getCorrect(number1, number2, selectedOperatorIndex, operators);
    const userAnswer = readlineSync.question(`Question: ${number1} ${operators[selectedOperatorIndex]} ${number2} `);
    console.log(`Your answer: ${userAnswer}`);
    return [Number(userAnswer), correctAnswer];
  };
  playGame(playRound, rule);
};
export default playCalcGame;
