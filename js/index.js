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
