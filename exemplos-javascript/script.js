// Exercicio 4

let ang1 = 60;
let ang2 = 60;
let ang3 = 0;

let sumOfAngs = ang1 + ang2 + ang3;

let angPositives = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (angPositives) {
  if (sumOfAngs === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: Angulo invalido.');
}