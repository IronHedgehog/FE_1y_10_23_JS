// 1) Лаконічний синтаксис

function getPlus(a, b) {
  return a + b;
}

// Стрілкова функція
// => - має вмонтований return

const ggPlus = () => console.log("a");
const gggPlus = (a) => console.log(a);

const plus = (a, b, c) => {
  const sum = a + b + c;
  return sum;
};

function getSum() {
  console.log(arguments);
  const array = Array.from(arguments);
  // array
}

getSum(1, 2, 34, 5, 6, 7, 8, 9, 0);

// rest & spread оператор (...)

// ...arg - rest операція(операція збору усіх окремих елементів в один масив)
const gPlus = (a, b, c, ...arg) => {
  console.log(a, b, c);
  console.log(arg);
  // console.log(arguments); // arguments не існує
};

function register(name, password, email, validator) {
  validator(name, password, email);
  if (true) {
    console.log("вітаю, ви зареєструвались");
  }
}

function validator(
  name,
  password,
  email,
  isValidName,
  isValidPassword,
  isValidEmail
) {
  isValidName(name);
  isValidPassword(password);
  isValidEmail(email);
  return true;
}

function isValidName(name) {
  if (name.length < 6) {
    console.log("нето");
  }
  return "то";
}

function isValidPassword(password) {
  if (password.length < 6) {
    console.log("нето");
  }
  return "то";
}

function isValidEmail(email) {
  if (email.length < 6) {
    console.log("нето");
  }
  return "то";
}

gPlus(1, 2, 3, 4, 56, 7, 8, 90, 12, 23, 4, 5, 5, 6, 77, 7, 88);

// Звичайна анонімка
() => {
  console.log("as");
};

// IIFE - функція яка миттево викликає сама себе
(() => {
  console.log("as");
})();

const input = document.getElementById("qwe");

input.addEventListener("input", (e) => {
  console.log(e);
});

input.addEventListener("input", (e) => console.log(e));

function onInput(e) {
  console.log(e);
}

//
func("a");
console.log(number);
// Функція зворотнього виклику (callback) - Сама по собі не викликається, використовується у вигляді сервісів
const printMessage = function (message) {
  // console.log(message);
};

// Вища фунція - функція,що приймає параметром іншу функцію
const highOrderFunc = function (callback) {
  const string = "asd";
  callback(string);
};

// Виклик функції
highOrderFunc(printMessage);

const button = document.getElementById("type");

button.addEventListener("click", onClickFunc);

function onClickFunc(e) {
  console.log("click");
}

// for (let i = 0; i < 50; i++) {
//   console.log(i);
// }

const repeatLog = function (n) {
  for (let i = 0; i < n; i++) {
    // console.log(i);
  }
};

repeatLog(40);

const array = [10, 21, 30, 41, 50, 61, 70, 81, 90, 101];
// функцця вищого порядку
const filter = function (array, test) {
  const filteredArr = test(array);
  return filteredArr;
};
// callback
function testNumbers(array) {
  const resultArr = [];
  for (const element of array) {
    if (element % 2 === 0) {
      resultArr.push(element);
    }
  }
  return resultArr;
}

filter(array, testNumbers);

console.log(number);

function func(a) {
  console.log(a);
}

var number = "as;da";
console.log(number);
