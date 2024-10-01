import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
export var userName = readlineSync.question('May I have your name? ');
export var greeting = console.log('Hello, ' + userName + '!');