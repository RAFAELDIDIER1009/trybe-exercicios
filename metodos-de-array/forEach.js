const data = require('./data')

//pegar todas as cartas de um determinado tipo

const getCardsByType = (...cardType) => {
  return data.cards
    .filter(({ typeId }) => cardType
     .find((type) => type === typeId))
     .map(({ typeId, name }) => ({ typeId, name }))
     .sort((a, b) => a.typeId - b.typeId)
};

console.log(getCardsByType(1, 2, 3));

