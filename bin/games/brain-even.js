import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js'
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getNumber = () => Math.round(Math.random() * 100);
const playRound = () => {
    const number = getNumber();
    const userAnswer =  readlineSync.question('Question: ' + number + ' '); 
    console.log('Your answer: ' + userAnswer.toLowerCase());
    if (number % 2 ===0 && userAnswer.toLowerCase() === 'yes') {
        console.log('Correct!');
        return true;
    } else if (number % 2 === 0 && userAnswer.toLowerCase() !== 'yes') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
        console.log("Let's try again, " + userName + "!");
        return false;
    } else if (number % 2 !==0 && userAnswer.toLowerCase() === 'no') {
        console.log('Correct!');
        return true;
    } else if (number % 2 !==0 && userAnswer.toLowerCase() !== 'no') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
        console.log("Let's try again, " + userName + "!");
        return false;
    }
};

const playEvenGame = () => {
    for (let i = 0; i < 3; i++) {
      const isCorrect = playRound();
      
      if (!isCorrect) {
        return;
      }
    }
    console.log('Congratulations, ' + userName + '!');
  }
  
  playEvenGame();

  export default playEvenGame;