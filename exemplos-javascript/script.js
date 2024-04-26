// Exercicio 5

let chesspiece = 'pafe';

switch (chesspiece.toLocaleLowerCase()) {
  case 'rei':
    console.log('Rei -> Uma casa para ualquer direção.');
    break;
  case 'rainha':
    console.log('Rainha -> Diagonal, lateral e adiante e para trás.');
    break;
  case 'bispo':
    console.log('Bispo -> Em diagonais.');
    break;
  case 'cavalo':
    console.log('Cavalo -> Movimentos em L, tres casas para frente uma para lateral.');
    break;
  case 'torre':
    console.log('Torre -> segue reto sem pular.');
    break;
  case 'peão':
    console.log('Peão -> Devagar se vai lonje, apenas uma por vez.');
    break;
  default:
    console.log('Erro, peça invçalida');
}
