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
