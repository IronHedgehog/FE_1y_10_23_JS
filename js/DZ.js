// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = 0;

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   //   console.log(element);
//   result = result + element;
//   //   result += element;
// }

// console.log(result);

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  // в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (!allLogins.includes(login)) {
    return true;
  }
  return false;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(login)) {
      allLogins.push(login);
      return "Ти молодець";
    } else {
      return "Такий логін вже існує";
    }
  } else {
    return " Введіть від 4 до 16 символів";
  }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'

let input;
const numbers = [];
let total = 0;

while (true) {
  // prompt - повертає строку
  input = prompt("Ввести число");

  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    console.log("Введи число");
    continue;
  }

  numbers.push(input);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total = total + number;
  }
}

console.log("сума: ", total);
