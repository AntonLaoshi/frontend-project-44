import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js';
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getNumber = () => Math.ceil(Math.random() * 100);

const playRound = () => {
    const number = getNumber();
    const userAnswer = readlineSync.question('Question: ' + number + ' ');
    console.log('Your answer: ' + userAnswer);
    let correctAnswer;
    if (number < 2) {
        correctAnswer = 'no';
    } else if (number === 2 || number === 3) {
        correctAnswer = 'yes';
    } else {
        for (let i = Math.floor(number / 2); i > 1; i--) {
            if (number === 2) {
                correctAnswer = 'yes';
                break;
            } else if (number % i === 0) {
                correctAnswer = 'no';
                break;
            }
            correctAnswer = 'yes';
        }
    }
    if (userAnswer.toLowerCase() === correctAnswer) {
        console.log('Correct!');
        return true;
    } 
    console.log("'" + userAnswer + "'" + " is wrong answer ;(. Correct answer was '" + correctAnswer + "'.\nLet's try again, " + userName + "!");
    return false;
};
const playPrimeGame = () => {
    for (let i = 0; i < 3; i++) {
      const isCorrect = playRound();
      
      if (!isCorrect) {
        return;
      }
    }
    console.log('Congratulations, ' + userName + '!');
  };
  
  playPrimeGame();

  export default playPrimeGame;