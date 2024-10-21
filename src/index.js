import readlineSync from 'readline-sync';

export const getNumber = (min = 0, max = 100) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

export const playGame = (fn, rule) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const results = fn();
    if (results[0] !== results[1]) {
      console.log(`'${results[0]}' is wrong answer ;(. Correct answer was '${results[1]}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
