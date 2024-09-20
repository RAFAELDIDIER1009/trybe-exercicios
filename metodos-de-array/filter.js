const data = require('./data');

//Exibir todas as cartas de um determinado tipo da seguinte forma

/*
[
 { typeId: 1, name: 'Blue-eyes Whithe Dragon'}
 { typeId: 1, name: 'Red-Eyes Black Dragon'}
 { typeId: 1, name: 'Dragon Queen of Tragic Endings'}
]
 */

const getCardsByType = (data, cardType) => { //função do tipo de cada carta
 const FilterResult = data.filter((card) => card.typeId === cardType);  //filtro de todas as cartas id 1
const mapResult = FilterResult.map((card) => ({ typeId: card.typeId, name: card.name})); //obj criado com map alterando o array

 return mapResult; // imprimindo o novo array com obj
}

console.log(getCardsByType(data.cards, 3)); // log com parametros da função
