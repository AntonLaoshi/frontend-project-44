export const getNumber100 = () => Math.round(Math.random() * 100);
export const getNumber20 = () => Math.round(Math.random() * 20);
export const getNumberCeil100 = () => Math.ceil(Math.random() * 100);
export const playGame = (fn, name) => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = fn();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
