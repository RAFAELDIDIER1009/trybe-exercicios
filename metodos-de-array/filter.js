const data = require('./data');

//Exibir todas as cartas de um determinado tipo da seguinte forma

/*
[
 { typeId: 1, name: 'Blue-eyes Whithe Dragon'}
 { typeId: 1, name: 'Red-Eyes Black Dragon'}
 { typeId: 1, name: 'Dragon Queen of Tragic Endings'}
]
 */

const getCardsByType = (data, cardType) => data
 .filter((card) => card.typeId === cardType) //filtro criado novo array
 .map((card) => ({ typeId: card.typeId, name: card.name})); // o resultado ja ligado com o map

console.log(getCardsByType(data.cards, 3)); // log com parametros da função
