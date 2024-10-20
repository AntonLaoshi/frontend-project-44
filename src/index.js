import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const checkEven = (num) => {
  // eslint-disable-next-line no-shadow
  const isEven = (num) => (num % 2 === 0);
  return (isEven(num) ? 'yes' : 'no');
};

export const checkPrime = (num) => {
  // eslint-disable-next-line no-shadow
  const isPrime = (num) => {
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
  }
  return (isPrime(num) ? 'yes' : 'no');
};

export const getNumber = (min = 0, max = 100) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

export const playGame = (fn, userName) => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = fn();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const giveAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
}; 
