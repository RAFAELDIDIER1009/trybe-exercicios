const data = require('./data');

// Adicionar uma propriedade para cada elemento
const addProperty = (data, propName, propValue) => data.map((card) => ({...card, [propName]: propValue,}));
////sprad operator espalhar o objeto em um objeto, ter todos os elementos em um só array


console.log(addProperty(data.cards, 'game', 'Yu-Gi-Oh!'));

