const random = Math.floor(Math.random() * (10 - 1) + 1); // 20 max 10 - min

console.log(random);

// криво дужки працюють, не можу розбити покроково дії для js
const messageTemperature = 10;
const tranformTemperature = (messageTemperature * 9) / 5 + 32;

// alert(
//   "Бум, магія, твої цельсії це" +
//     " " +
//     tranformTemperature +
//     " " +
//     "фаренгейтів"
// );

//// чи взагалі грають роль подвійні лапки чи одинарні?

//randomInteger не працює
// console.log(randomInteger(1, 5));

// як зробити нормальні пробіли, а не через лапки

const num = 10;
console.log(`Бум, магія, твої цельсії це ${tranformTemperature} фаренгейтів`);

// я не поняв як перевірку на ціле число зробити
//чісло % 1 === 0

console.log(Number.isInteger(1));

const ranodm = Math.random() * 10;
console.log(ranodm);
//ssssssssssssssssssssssssssssssss
console.log(ranodm % 1 === 0);

// if (Number.isInteger(firstLevel) == false) {
//   const secondLevel = Number.parseInt(firstLevel);
// } else {
//   alert("Зміни число");
// }

// останнє завдання

const integer = 10;
const string = "1";

console.log(typeof Number.parseInt(string));

// console.log(10 + " " + +string);

console.log(typeof integer.toString());

// рандомне число з плаваючою точкою // Math.random()

//Number.parseInt()
Number.parseInt();

const a = "1";

console.log(Number.parseInt(a));
console.log(Math.PI);
// Math.sqrt - Повертає корінь числа
console.log(Math.sqrt(10));
//math.pow - підносить до ступіня
console.log(Math.pow(10, 2));
//math.floor()
console.log(Math.floor(9.9));
//Math.ceil() - округлення до більшого числа
console.log(Math.ceil(9.1));

//Math.round() - Робить округлення за математичними правилами
console.log(Math.round(9.5));
//Math.max()
console.log(Math.max(1, 2, 3, 4, -1, 5, 6, 67, 0));
//Math.min()
console.log(Math.min(1, 2, 3, 4, -1, 5, 6, 67, 0));
