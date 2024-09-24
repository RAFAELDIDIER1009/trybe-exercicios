const numbers = [4, 9, -1, 16, -5, 25];

const getRaiz = (numbers) => {
  return numbers.map((number) => {
    if (number > 0) {
      return Math.sqrt(number);
    } return `NaN`
    }
  
  )};


console.log(getRaiz(numbers));
