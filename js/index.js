console.log(a);

const name = "Artem";

//1)ключове слово
// 2) Назва вашої змінної
// 3) = оператор присвоєння
// 4) значення

const hobby = "Грати";
console.log(hobby);
//перше слово з маленької, всі інші починаються з великої
const veryLongNameHere = "";

// const - яку не можна змінювати або перевизначати в майбутньому
// let - не обовʼязково давати значення одразу
// ви мижете змінювати його нижче у коді безліч разів

let age;
console.log(age);

// age = 20;

// age = 200;

const string = "afnasdonfkasndkfnaowenfoawneofnownfownf";
console.log(typeof string);
const number = 40;
console.log(typeof number);
// true = - правда
// false - не правда
const boolean = true || false;
console.log(boolean);
console.log(typeof boolean);

// конкатиннація - зшивання строк
// інтерполяція - ``

const fr = "idlkalkaklsdmlasmdl";

const n = 10;

// typeof - дозволяє визначити тип данних
console.log(typeof n);

const isNull = null;
//
const undef = undefined;
//
console.log(typeof o);

console.log(`"${fr}"`);

console.log(number);

// alert("Все пропало, все погано, все упало");

// const message = confirm("Чи згодні ви?");
// console.log(message);

// const asdas = prompt("Введи свій нік");
// console.log(asdas);

var a = 10;

a = 10;

// const as = BigInt(128390182309182093812000);

// Symbol

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  //   alert("дякую вам за замовлення");
  //   const review = confirm("Чи вам сподобалось?");
  //     console.log(review);
  const a = prompt("Введіть імʼя");
  console.log(a);
  // .length - довжина
  // a.length = довжина строки а
  if (a.length >= 2) {
    alert("Все успішно ви молодець");
  } else if (a.length <= 170) {
    alert("Все ок");
  } else {
    alert("Введіть коректне імʼя");
  }
});
// if else - якщо - інакше

// const message = confirm("Чи підтверджуєте ви що вам більше 18 років?");

// if відпрацьовує тільки в випадку коли в круглих дужках true

// якщо if === true тоді відпрацьовує блок if
// якщо if === false тоді відпрацьовує блок else
// !==
// if (message) {
//   console.log("Дякуєм за підтвердження");
// } else {
//   console.log("Приходьте пізніше");
// }

alert("Дія небезпечна");
const alertConfirm = confirm("Дія небезпечна, чи хочете ви продовжувати?");

if (alertConfirm) {
  alert("Дякую");
} else {
  alert("Відміна");
}
