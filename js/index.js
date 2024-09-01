// Імперативний код - код в якому ми описали кожен наш крок
const numbers = [1, 23, 4, 5, 6];

let counter = 0;

for (let i = 0; i < numbers.length; i++) {
  counter += numbers[i];
}

console.log(counter);

//Декларативний код  - основна реалізація коду прихована

const number1 = [1, 23, 4, 5, 6];
let counter1 = 0;

number1.forEach((number, index, array) => console.log((counter1 += number)));
// number1.forEach(function name(number, index, array) {
//   console.log((counter1 += number));
// });

const numbers1 = [1, 23, 4, 56, 7, 8, 9];

//filter - повертає масив відфільтрованих даних за умовою яку ми прописали після стрілочки
//filter - приймає колбек, який містить 3 парамаетри (value - значення масивів кожне по черзі, index - порядковий номер елментів в масиві, array - це сам масив на якому ми з вами викликаємо метод перебору)
//

const validData = numbers1.filter((value, index, array) => value >= 20);

console.log(validData);

//dirtyFuncPlus - функція з побічними ефектами - мотування початкових данних
function dirtyFuncPlus(array) {
  if (!Array.isArray(array)) return;
  // То функція має мотувати початкові значення
  for (let index = 0; index < array.length; index++) {
    array[index] += 10;
  }
  return array;
}

// console.log(dirtyFuncPlus(numbers1));

// console.log(numbers1);

// pureFuncPlus - чиста функція - не мотує початкові данні
function pureFuncPlus(array) {
  if (!Array.isArray(array)) return;
  //map - перебираючий метод масиву,приймає колбек, який містить 3 парамаетри (value - значення масивів кожне по черзі, index - порядковий номер елментів в масиві, array - це сам масив на якому ми з вами викликаємо метод перебору)
  // map - Він повертає новий масив тієїж довжини,що і той який ви передали дл яперебору але вже з виконаною дією яку ви попросили

  // const result = array.map((value, index, array) => value + 10);
  // return result
  // map - повертає масив`
  return array.map((value, index, array) => value + 10);
}

// pureForFuncPlus - чиста функція
function pureForFuncPlus(array) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    result[index] = array[index] + 10;
  }

  return result;
}

console.log(pureForFuncPlus(numbers1));

console.log(numbers1);

console.log(pureFuncPlus(numbers1));

console.log(numbers1);

const films = [
  {
    author: "any",
    title: "anyTitle",
  },
  {
    author: "any2",
    title: "anyTitle",
  },
  {
    author: "any3",
    title: "anyTitle",
  },
  {
    author: "any4",
    title: "anyTitle",
  },
  {
    author: "any5",
    title: "anyTitle",
  },
  {
    author: "any6",
    title: "anyTitle",
  },
  {
    author: "any7",
    title: "anyTitle7",
  },
];

const authorName = "any7";

const authors = films.map((film) => film.author);
const authorsFilter = films.filter((film) => film.author === authorName);

console.log(authorsFilter);

console.log(authors);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const q = array.filter((number) => number > 5);
const w = array.filter((number) => number > 5);
const e = array.filter((number) => number === 5);

console.log(q);
console.log(w);
console.log(e);

// find - шукає перший збіг за вашою умовою
// повертає розшукуваний обʼєкт
//

const film = films.find((film) => film.title === "anyTitle");
const film7 = films.find((film) => film.title === "anyTitle7");

console.log(film);
console.log(film7);

// && - І - every
// || - або - some

const team = [
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: false,
  },
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: false,
  },
  {
    name: "NAME",
    readyToProject: false,
  },
];

// some - повертає boolean(true або false)
//якщо є хоча б одне true то повератає true

const readyCheck = team.some((teamMember) => teamMember.readyToProject);

console.log(readyCheck);

// every - повертає boolean(true або false)

//якщо є хоча б одне false то повератає false
const everyReadyCheck = team.every((team) => team.readyToProject);

console.log(everyReadyCheck);

// DOM

const users = [
  {
    name: "Petro",
  },
  {
    name: "Artem",
  },
  {
    name: "htos",
  },
  {
    name: "shoc",
  },
];

// const ul = document.createElement("ul");

// users.forEach((user) =>
//   document.body.insertAdjacentHTML(
//     "beforeend",
//     `<li>${user.name}</li> <button class="student">перевірити</button>`
//   )
// );

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers3.filter((item) => item < 3);

// .reduce - метод перебору масиву з батарейкою
// prevValue - поточне значення батарейки
const a = numbers3.reduce((prevValue, number) => {
  console.log(prevValue);
  return (prevValue += number);
}, 0);

const ITDep = [
  {
    name: "Petro",
    sallary: 20000,
  },
  {
    name: "Mangust",
    sallary: 15000,
  },
  {
    name: "htos",
    sallary: 30000,
  },
];

const totalSallary = ITDep.reduce((prevValue, it) => prevValue + it.sallary, 0);

console.log(totalSallary);
// [] - будемо заряджати пустий масив
// const plus = numbers3.reduce((prevValue, number) => {
//   // return (prevValue = prevValue[]);
// }, []);

console.log(a);

const strings = ["q", "w", "e", "a", "c", "b"];
const numbers4 = [5, 3, 20, 50, 21];
// a,b = це два параметри які приймає метод сорт
// a - минуле значення
// b - наступне значення
// (a, b) => b - a) - прохід від найбільшого до найменшого
// (a, b) => a - b) - прохід від найменшого до найбільшого
console.log(numbers4.sort((prev, next) => prev - next));
console.log(strings.sort());

const sortedITDepartment = ITDep.sort(
  (prev, next) => next.sallary - prev.sallary
);
console.log(sortedITDepartment);

//Метод sort - функція з домішками(мотує початковий масив)
//  тож робимо перед сортуванням копії(map(), slice(),[...ITDep].sort())
