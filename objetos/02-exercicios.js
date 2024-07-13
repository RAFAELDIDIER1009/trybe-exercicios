// função que retorne a quatidade total de números vendidos

const { getMcInfo } = require('./01-exercicios');
const menu = require('./data');

const totalItems = () => {
  const items = getMcInfo();

  const values = Object.values(items);

  let sum = 0;
  for (let index = 0; index < values.length; index += 1) {
    sum += values[index];
  }

  return sum;
}

console.log(totalItems);
