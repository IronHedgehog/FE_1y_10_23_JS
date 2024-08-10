// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const title = document.querySelector("#title");
const director = document.getElementById("director");
const year = document.getElementById("year");
const rating = document.getElementById("rating");

const movie = {
  title: "DeadPool 2",
  director: "ХТОСь",
  year: 2018,
  rating: 9,
  checkRating() {
    if (this.rating > 8) {
      return true;
    }
    return false;
  },
};
// Два способи отримати значення якогось з ключів
// console.log(movie["title"]);
// console.log(movie.title);
// console.log(movie.checkRating());

if (movie.checkRating()) {
  //   title.style.color = "green";
  title.classList.add("green");
} else {
  title.classList.remove("green");
}
title.textContent = movie.title;
director.textContent = movie.director;
year.textContent = movie.year;
rating.textContent = movie.rating;

// APPENDChild
// Перебрати
// створити елемент(тег)
// Заповнити цей тег
// Додати створений елемент на сторінку

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

const depositButton = document.getElementById("button-deposit");
const withDrawButton = document.getElementById("button-withdraw");

const bankAccount = {
  ownerName: "Artem",
  accountNumber: 123556,
  balance: 2000,
  deposit(money) {
    if (money <= 0) {
      throw new Error("Що відʼємні значення вводити не можна");
    }
    this.balance += money;
  },
  withdraw(money) {
    if (money <= 0) {
      throw new Error("Що відʼємні значення вводити не можна");
    }
    this.balance -= money;
  },
};

// depositInput.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

depositButton.addEventListener("click", (e) => {
  const depositInput = Number(document.querySelector("#deposit").value);
  //   const depositInput = document.querySelector("#deposit").value;
  bankAccount.deposit(depositInput);
  alert(`У вас на рахунку ${bankAccount.balance}`);
});

withDrawButton.addEventListener("click", (e) => {
  const withdrawInput = Number(document.getElementById("withdraw").value);
  // const withdrawInput = document.getElementById("withdraw");
  console.log(withdrawInput);
  bankAccount.withdraw(withdrawInput);
  alert(`У вас на рахунку ${bankAccount.balance}`);
});

// const inputForMoney = document.querySelector(".inputMoney");
// const depositnaButton = document.querySelector(".depositButton");
// const gotivkaButton = document.querySelector(".withdrawButton");
// const bankAccount = {
//   ownerName: "Vadymka",
//   accountNumber: 123456789,
//   balance: 7,
//   deposit(valuesh) {
//     this.balance += valuesh;
//     console.log(`Залишок на балансі ${this.balance}`);
//   },
//   withdraw(valuesh) {
//     this.balance -= valuesh;
//     console.log(`Залишок на балансі ${this.balance}`);
//   },
// };
// const withdrawFunc = function (e) {
//   const value = Number(inputForMoney.value);
//   bankAccount.withdraw(value);
// };
// gotivkaButton.addEventListener("click", withdrawFunc);
// depositnaButton.addEventListener("click", (e) => {
//   const value = Number(inputForMoney.value);
//   bankAccount.deposit(value);
// });

const pack = ["a", "b", "c", "A", "B", "C", "1", "2", "3"];
const createPasswordGenerator = function (pack) {
  return function (length) {
    let passwordNew = "";
    for (let index = 0; index < length; index++) {
      const randomCharachterIndex = Math.floor(Math.random() * pack.length);
      passwordNew += pack[randomCharachterIndex];
    }
    return passwordNew;
  };
};

const generatorPassword = createPasswordGenerator(pack);
console.log(generatorPassword);

const password = generatorPassword(123);
console.log(password);
