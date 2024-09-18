const data = require ('./data');

/* const newArray = [];

for (let index = 0; index < data.types.length; index += 1) {
  newArray.push(data.types[index].name);
}

console.log(newArray); */

const newArrayMap = data.types.map((type) => type.name);

console.log(newArrayMap);
