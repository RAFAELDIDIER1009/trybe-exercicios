// Exercício: Crie uma função que retorne o maior e o maior número dentro de um array

const biggestSmallerNumber = (array) => {
  let bigger = array[0];
  let smaller = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    } else if (array[index] < smaller) {
      smaller = array[index];
    }
  }

  return `Menor: ${smaller}
Maior ${bigger}`;

};
  

console.log(biggestSmallerNumber ([1, 2, 3, 4, 6, -5, -4, 0,]));
console.log(biggestSmallerNumber ([12, 23, 34, 44, 65, -500, -4, 0, 20, -10000]));

