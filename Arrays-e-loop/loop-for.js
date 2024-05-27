const lotteryNumbers = [];
const firstGame = [4, 8, 15, 16, 23, 42,];

for (let index = 0; index < 6; index += 1) {
 lotteryNumbers.push(Math.ceil(Math.random() * 60));
};

console.log(lotteryNumbers);
