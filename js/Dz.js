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

// class Car {
//   /*
//    * Додай статичний метод `getSpecs(car)`,
//    * який приймає об'єкт-машину як параметр і виводить
//    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//    */
//   static getSpecs(car) {
//     console.log(
//       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
//     );
//   }
//   /*
//    * Конструктор отримує об'єкт налаштувань.
//    *
//    * Додай властивості майбутнього екземпляра класу:
//    *  speed - поточна швидкість, початкова 0
//    *  price - ціна автомобіля
//    *  maxSpeed - максимальна швидкість
//    *  isOn - заведений автомобіль, значення true або false. Спочатку false
//    *  distance - загальний кілометраж, спочатку 0
//    */
//   constructor({ price, maxSpeed }) {
//     this.speed = 0;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   /*
//    * Додай геттер і сеттер для властивості price,
//    * який буде працювати з властивістю ціни автомобіля.
//    */

//   /*
//    * Додай код для того, щоб завести автомобіль
//    * Записує у властивість isOn значення true
//    */

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     return (this._price = newPrice);
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Додай код для того, щоб заглушити автомобіль
//    * Записує у властивість isOn значення false,
//    * і скидає поточну швидкість в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   /*
//    * Додає до властивості speed отримане значення,
//    * за умови, що результуюча швидкість
//    * не більше, ніж значення властивості maxSpeed
//    */

//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   /*
//    * Забирає від властивості speed отримане значення,
//    * за умови, що результуюча швидкість не менше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value >= 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */

//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// static methods

class Mathh {
  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(Mathh.add(1, 2));

// const dubl = new Mathh();
// console.log(dubl.add);

// Uncaught RangeError: Maximum call stack size

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
