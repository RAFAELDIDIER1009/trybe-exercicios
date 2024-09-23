const data = require('./data');

//encontre a primeira carta de acordo com seu filtro

const firstCardByType = (typeName) => {
  const getType = data.types.find((type) => type.name === typeName);
  const getCard = data.cards.find(({ typeId }) => typeId === getType.id);

  return {
    typeId: getType.id,
    typeName: getType.name,
    cardName: getCard.name,
  }
};


console.log(firstCardByType('Spellcaster'));






