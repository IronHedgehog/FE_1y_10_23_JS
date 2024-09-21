// НЕ ПРАЦЮЄ
const user = {
  name: "Mango",
  age: 20,
  // hobby: "html",
  // premium: true,
};

// premium: newPremium - означає, що ви переіменвали змінну

//  = встановлення значення за замовчуванням ( це є значення за замовчуванням - коли такого поля не існує в обʼєкті який ви деструктуризуєте)

const {
  name,
  age,
  hobby: newHobby = (user.hobby = "shoc"),
  premium: newPremium = false,
  mood = "happy",
} = user;

console.log(name, age, newHobby, newPremium, mood);

// const { name: name2, age: age2 } = { name: "Mango", age: 2 };

const anyUser = { name1: "Mango", age1: 2 };

const { name1, age1: age2 } = anyUser;

console.log(name1, age2);

const numbers = [1, 2, 3, 4, 5];

const [one, two, three, ...rest] = numbers;

console.log(one, two, three, rest);

// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

const obj = {};

obj.getInfo = "інфа";
console.log(obj);

function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

console.log(Account.prototype);

console.log([0]);

//prototype - обʼєкти від якого ми наслідуємось
console.log(
  (Array.prototype.filterFunc = function () {
    console.log("filter");
  })
);

console.log([].filterFunc());

Account.prototype.getInfo = function () {
  console.log(this.login, this.email);
};

console.log(Account.prototype.getInfo); // function
console.log(Account.prototype); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// console.log(mango);
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// Напиши клас User для створення користувача з наступними властивостями:

// name - рядок
// age - число
// followers - число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
  constructor({ name, age, followers }) {
    console.log(name);
    console.log(age, followers);
    this._name = name; // Consistent with underscore usage
    this._age = age; // Consistent with underscore usage
    this._followers = followers; // Consistent with underscore usage
  }

  getInfo() {
    console.log(
      `User ${this._name} is ${this._age} years old and has ${this._followers} followers`
    );
  }
}

const poly2 = new User("Poly", 3, 17);

const userObj = {
  name: "Mango",
  age: 2,
  followers: 20,
};

const mango = new User(userObj);

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Додай методи класу:

// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(itemToAdd) {
    this.items.push(itemToAdd);
  }
  removeItem(itemToDelete) {
    // return this.items.filter((items) => items === itemToDelete);
    const indexToDelete = this.items.indexOf(itemToDelete);
    if (indexToDelete > -1) {
      this.items.splice(indexToDelete, 1);
    }
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// Завдання 4
// Напиши клас StringBuilder. На вхід він отримує один параметр - рядок, який записує у властивість _value.

// Додай класу наступний функціонал:

// Геттер value - повертає поточне значення поля _value
// Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value

class StringBuilder {
  constructor(string) {
    this._string = string;
  }

  get string() {
    return this._string;
  }

  append(str) {
    return (this._string += str);
  }

  prepend(str) {
    return (this._string = str + this._string);
  }
  pad(str) {
    return (this._string = str + this._string + str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.string); // '.^'

builder.prepend("^");
console.log(builder.string); // '^.^'

builder.pad("=");
console.log(builder.string); // '=^.^='
