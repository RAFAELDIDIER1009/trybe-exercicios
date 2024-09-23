const data = require('./data')

//adicionar a propriedade game em todos os elementos do array cards

const addProperty = (propKey, propValue) => {
 data.cards.forEach((card) => card[propKey] = propValue)   //criar propriedade que não existe com forEach
};

addProperty('game', 'Yu-Gi-Oh!');

console.log(data.cards);
