/* função que recebe uma região por parâmetro e retorne um array de objetos no formato:

{
contryName: 'Afghanistan',
population: 40218234,
languages: [ 'Pashto', 'Uzbek', 'Turkmen' ]
},

*/

const dataCountries = require('./data.json');

const getContriesByRegion = (data, region) => {
  const filterContries = [];

  for (let index = 0; index < data.length; index += 1) {
    const langNames = [];
    for (let indexLang = 0; indexLang < data[index].languages.length; indexLang += 1) {
      langNames.push(data[index].languages[indexLang].name);
  }
   if (data[index].region === region) {
    filterContries.push({
      countryName: data[index].name,
      pupolation: data[index].population,
    languages: langNames,
     })
    }
  }
  return filterContries;
};

//função que o exercicios pediu criada.

console.log(getContriesByRegion(dataCountries, 'Africa'));