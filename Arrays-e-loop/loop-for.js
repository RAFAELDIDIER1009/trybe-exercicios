const lotteryNumbers = [];
const firstGame = [5, 8, 20, 16, 23, 42,];

// Sorteio dos números com função
const generateLotteryNumbers = (quantidade, maxNumber, array) => {
  for (let index = 0; index < quantidade; index += 1) {
   let randomNumber = (Math.ceil(Math.random() * maxNumber));
  if (array.includes(randomNumber)) {
    index -= 1;
  } else {
    array.push(randomNumber);
  }
  };
}
//invocar função
generateLotteryNumbers(7, 70, lotteryNumbers);

// Comparação do sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1){
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
numberOfHits += 1;
hits.push(lotteryNumbers[indexLottery]);

    }
  }
}

// Quantidade de acertos
console.log(`Número sorteados: ${lotteryNumbers}`);
console.log(`jogo: ${firstGame}`);
console.log(`Quantidade de acertos: ${numberOfHits}`);
console.log(`Números acertados: ${hits}`);