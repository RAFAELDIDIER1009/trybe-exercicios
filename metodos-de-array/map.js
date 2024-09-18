const data = require('./data');

// Criar uma string para cada carta com seu ataque e defesa

const getCardAtkAndDef = (cards) => {
return cards.map((card) => {
  if (card.atk !== undefined && card.def !== undefined) {
    return `A carta ${card.name} possui o ataque ${card.atk} e defesa de ${card.def}`;
  } 
   return `esta carta não possui ataque e/ou defesa.`;
})
};

console.log(getCardAtkAndDef(data.cards));



