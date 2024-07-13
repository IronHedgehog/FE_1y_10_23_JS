// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
// перший варіант, але не такий який я хочу. Чи є сенс писати взагалі else
// const arraySeven = [];
// for (let i = 0; i < 10; i++) {
//   arraySeven[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//   if (arraySeven[i] % 2 === 0) {
//     console.log(arraySeven[i]);
//   } else {
//     continue;
//   }
// }

// рішення від чату джпт, але занадто складно
// const maxNumber = Math.max(...arraySix);
// console.log("The largest number in the array is:", maxNumber);

// console.log(arraySix);
// for (const number of arraySix) {
//   console.log(Math.max(arraySix));
// }

// чи коректне таке написання?
arrayFirst[1] = 10;
console.log(arrayFirst);

// Створити скрипт який поверне суму всіх чисел в масиві.
const arrayThird = [];
for (let i = 0; i < 5; i++) {
  arrayThird[i] = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  // щось якось не поняв
  //   let total = 0;
  //  Number(total += arrayThird[i]);
}

const array2 = [8, 9, 10, 11, 12];
const arrays2 = array2[0] + array2[1] + array2[2] + array2[3] + array2[4];
console.log(arrays2);
