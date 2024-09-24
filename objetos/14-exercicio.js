const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(school, 0));

const getNumberOfStudents = (obj) => {
  // Declara uma variável para contador
  let count = 0;

  // Itera o array e incrementa em count o total de estudantes em cada curso
  for (let index = 0; index < obj.lessons.length; index += 1) {
    count += obj.lessons[index].students;
  }

  // Retorna o total de estudantes
  return count;
}

console.log(getNumberOfStudents(school));

const verifyProp = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index][key] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(verifyProp(school, 'professor')); // false

const changeKey = (obj, course, value) => {
  // Encontra o elemento que o course é igual a Python
  let findCourse;
  for (let index = 0; index < obj.lessons.length; index += 1) {
    let element = obj.lessons[index];
    if (element.course === course) {
      findCourse = element;
      break;
    }
  }

  // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.
  if (findCourse !== undefined) {
    findCourse.shift = value;
    return findCourse;
  } else {
    return 'Curso não encontrado.';
  }
};

console.log(changeKey(school, 'Python', 'Noite'));
