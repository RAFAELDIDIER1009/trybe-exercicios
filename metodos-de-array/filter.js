const data = require('./data');

//exiba todas as cartas com o ataque maior que 2000

const getCardsByAtk = (data, atkNumber) => data.filter((card) => card.atk > atkNumber);


console.log(getCardsByAtk(data.cards, 3000));
