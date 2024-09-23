const data = require('./data');

//encontre uma carta de acordo com o seu nome

const findCard = (data, cardName) => data
.find((card) => card.name === cardName);

 
console.log(findCard(data.cards, 'Dark Magician'));


