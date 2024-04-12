let diaper;
let babySise = 20;


if (typeof babySise !== 'number') {
  diaper = 'Valor inválido, digite um number';
} else if(babySise <= 4) {
  diaper = 'RN';
} else if (babySise > 4 && babySise <= 6) {
  diaper = 'RN+';
}
 else if (babySise > 6 && babySise <= 8) {
  diaper = 'PP';
}
else if (babySise > 8 && babySise <= 10) {
  diaper = 'P';
}
else if (babySise > 10 && babySise <= 13) {
  diaper = 'M';
}
else if (babySise > 13 && babySise <= 15) {
  diaper = 'G';
}
else if (babySise > 15) {
  diaper = 'GG';
}

console.log('o tamanho da fralda é: ' + diaper);
