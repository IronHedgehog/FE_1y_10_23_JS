const num = 7;

// const numberInput = document.querySelector("#number");
// console.log(typeof numberInput.value);

// const numFromInput = numberInput.value;

// const tochnoInt = num + numberInput.value; // 123 // 7123

// console.log(tochnoInt);

// Все,що ви записуете в текстові поля це тип даних STRING(строки)
// const userInput = prompt("Введіть число");

// console.log(typeof userInput);

// ts - показує ваші помилки ще на стадії розробки
// Додає сувору типізацію
// function add(num1, num2) {
//   // && - i
//   // || - або
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     return num1 + num2;
//   }
//   return num1 + num2;
// }

// add(num, Number(userInput));

// add(num, Number(userInput));

// отримати від користувача число в хвилинах
// перевести хвилини у час (дні,години, хвилини)

const userInput = prompt("Введіть число");

// З хвилин отримати кількість годин
const numberHours = Number(userInput) / 60;
// З хвилин отримати дні
//1440 - хвилин одна доба
const days = Math.floor(numberHours / 24);

const hours = Math.floor(numberHours % 60);

const minutes = Number(userInput) % 60;

const modHours = String(hours).padStart(2, 0);
const modMinutes = String(minutes).padStart(2, 0);

// Години ведуть себе не адекватно коли значеня 1 день +
//  Треба пофіксить

console.log(`Дні: ${days} години: ${modHours} хвилини ${modMinutes} `);
