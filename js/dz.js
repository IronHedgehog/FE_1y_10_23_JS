//   The issue in your code is related to the logic of the if and else if statements. The conditions are being checked in a way that once a condition is true, it will execute the corresponding block and skip the rest. This causes incorrect evaluations. Specifically, the problem lies in the ordering of the else if statements. Let's correct this:
// Fix the order of conditions: Ensure that the age ranges do not overlap incorrectly. For instance, the current order means that an age of 15 will be evaluated as a child because it only checks if age > 0 before it checks if age > 13.
const ageValue = 9;

if (ageValue > 65) {
  console.log("Ти пенсіонер");
} else if (ageValue > 20) {
  console.log("Ти дорослий");
} else if (ageValue > 13) {
  console.log("Ти підліток");
} else if (ageValue < 13) {
  console.log("Ти дитина");
} else {
  console.log("Ти 3");
}

//

//
// у форми клас sposib
// document - весь HTML документ
// querySelector(), getElementById()
//  в середину (записуєм селектор елементу який шукаємо)
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // input - селектор тегу
  // [name=sposib] - селектор атрибуту
  // :checked - псевдоклас стану елементу
  const checkedInput = document.querySelector(
    "input[name=sposib]:checked"
  ).value;

  let sum = 100;

  let message = `Ви сплатили ${sum}`;

  let comm = 0;

  switch (checkedInput) {
    case "cash":
      message = "Ви сплатили готівкою без комісії";
      break;

    case "credit card":
      comm = sum * 0.02;
      message = `Ви сплатили разом з комісією ${comm}`;
      sum += comm;

      break;

    case "PayPal":
      comm = sum * 0.03;
      message = `Ви сплатили разом з комісією ${comm}`;
      sum += comm;
      break;

    default:
      message = "Недостатньо коштів";
      break;
  }
  console.log(
    checkedInput === "cash"
      ? message
      : `Ви сплатили ${sum} та комісію у розмірі  ${comm}`
  );
});

const sposib = "PayPal";

let sum = 100;

let message = `Ви сплатили ${sum}`;

switch (sposib) {
  case "cash":
    message = "Ви сплатили готівкою без комісії";
    break;

  case "credit card":
    message = `Ви сплатили разом з комісією ${sum * 0.02}`;
    sum = sum + sum * 0.02;
    break;

  case "PayPal":
    message = `Ви сплатили разом з комісією ${sum * 0.03}`;
    sum = sum + sum * 0.03;
    break;

  default:
    message = "Недостатньо коштів";
    break;
}

console.log(
  sposib === "cash" ? message : `Ви сплатили разом з комісією ${sum}`
);

// Вибір способу оплати (switch case та тернарний оператор):
// Напишіть функцію, яка приймає спосіб оплати(готівка, кредитна картка, PayPal) і суму.Поверніть повідомлення про комісію: 0 % для готівки, 2 % для кредитної картки, 3 % для PayPal.
// Використайте switch case для вибору способу оплати та тернарний оператор для визначення, чи потрібно додавати слово "комісія" до відповіді.

// radioButtons.forEach((button) => {
//   button.addEventListener("input", functionForFunction);
// });

//
