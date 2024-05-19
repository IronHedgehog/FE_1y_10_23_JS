// Оператори
// Математичні
// + - * / %
//  * - Множення
//  / - поділити
// console.log(2 + 2); // 4
// console.log(5 - 3); // 2
// console.log(2 * 2); // 4
// console.log(4 / 2); // 2

// // % - залишок від ділення
// console.log(5 % 2); // ?

// console.log(10 % 5); // 0
// console.log(11 % 5); // 1

//  в 5 влазить 2 рази по 2

const number = 10;

// number % 2 - залишок від ділення числа яке зберігається у змінній number на 2
// якщо цей залишок дорівнює 0

// number % 2 === 0 - залишок від ділення на 2 має суворо дорівнювати числу  0
// if (number % 2 === 0) {
//   console.log("число кратне 2");
// } else {
//   console.log("число не кратне");
// }
// = - присвоювання a =5,
// Порівняльні

// порівнюємо за значення == (майже не використовується)
console.log(2 == "2"); // true
// порівняння == за значенням === за типом данних
console.log(2 === "2"); // false

// ! - не - змінює значення на протилежне
// console.log(2 !== 2); //  false
// console.log(2 !== 4); // true
// //  > ,<, <=, >=

// console.log(5 > 2); // true
// console.log(2 < 5); // true
// console.log(5 <= 2); // false
// console.log(5 >= 2); // true

const number1 = " 20"; // строка

const number2 = undefined;
// NaN - not a number - не число

console.log(Number(number2));

console.log(typeof number1);
console.log(Number(number1));

console.log(Number("5px")); // NaN
console.log(Number.parseInt("5.2px")); //  parseInt - перебири та знайди ціле число - integer // 5
console.log(Number.parseFloat("5.2px")); // для дробових чисел
console.log("object".length);

// Перевірка на число

const normalNum = Number("50");
// ! - не
console.log(!Number.isNaN(normalNum)); // false

const badNum = Number("ans5"); // NaN

console.log(!Number.isNaN(badNum)); // true
