// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
// перший варіант, але не такий який я хочу. Чи є сенс писати взагалі else

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arraySeven = [];
for (let i = 0; i < 10; i++) {
  arraySeven[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  if (arraySeven[i] % 2 === 0) {
    console.log(arraySeven[i]);
  } else {
    continue;
  }
}
console.log(arraySeven);

// рішення від чату джпт, але занадто складно

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const arraySix = [];
for (let i = 0; i < 10; i++) {
  arraySix[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
}
console.log(arraySix);

let maxsimus = 0;
for (let i = 0; i < arraySix.length; i++) {
  const element = arraySix[i];
  if (element > maxsimus) {
    maxsimus = element;
  }
}
console.log(maxsimus);
// рішення від чату джпт, але занадто складно
const maxNumber = Math.max(...arraySix);

// ... - rest,spread оператор в залежності від використання

console.log(...arraySix);

console.log(Math.max(...[1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 89, 9, 0, 0]));
//
console.log("The largest number in the array is:", maxNumber);

// чи коректне таке написання?
const arrayFirst = [1, 2];
arrayFirst[1] = 10;
console.log(arrayFirst);

// Створити скрипт який поверне суму всіх чисел в масиві.
// asdasdasdasdasasdasdasdqweasdzxcvbbfs
// const arrayThird = [];
// let total = 0;
// for (let i = 0; i < 5; i++) {
//   arrayThird[i] = Math.floor(Math.random() * (20 - 1 + 1) + 1);

//   Number((total += arrayThird[i]));
// }
// console.log(total);

const array2 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 30, 40, 100, 2000];
let counter = 0;
for (const number of array2) {
  // counter  - лічильник, створений для підрахунку суми
  // +=  - counter = counter + number
  // number - одне число з нашого масива
  counter += number;
}

// const arrays2 = array2[0] + array2[1] + array2[2] + array2[3] + array2[4];
console.log(counter);

// TODO: Додай коментарі

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][2]);
let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  const element = matrix[i];
  console.log(element);
  for (let j = 0; j < element.length; j++) {
    const elementJ = matrix[i][j];
    console.log(elementJ);
    sum += elementJ;
  }
}

console.log(sum);
