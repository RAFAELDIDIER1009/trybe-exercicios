const data = require('./data');

//Pegue todas as cartas que possuem atk e coloque em ordem crescente por ataque

/*
[
 { name: 'D.D. Crow', atk: 100}
]
 */

const sortCardsByAtk = (data) => data
.filter((card) => card.atk !== undefined)
.map(({ name, atk}) => ({ name, atk }))
.sort((a, b) => a.atk - b.atk);


console.log(sortCardsByAtk(data.cards));
