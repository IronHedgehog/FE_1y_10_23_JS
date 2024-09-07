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

const numbers1 = [1, 23, 4, 56, 7, 8, 9];

//filter - повертає масив відфільтрованих даних за умовою яку ми прописали після стрілочки
//filter - приймає колбек, який містить 3 парамаетри (value - значення масивів кожне по черзі, index - порядковий номер елментів в масиві, array - це сам масив на якому ми з вами викликаємо метод перебору)
//

const validData = numbers1.filter((value, index, array) => value >= 20);

console.log(validData);

//dirtyFuncPlus - функція з побічними ефектами - мотування початкових данних
function dirtyFuncPlus(array) {
  if (!Array.isArray(array)) return;
  // То функція має мотувати початкові значення
  for (let index = 0; index < array.length; index++) {
    array[index] += 10;
  }
  return array;
}

// console.log(dirtyFuncPlus(numbers1));

// console.log(numbers1);

// pureFuncPlus - чиста функція - не мотує початкові данні
function pureFuncPlus(array) {
  if (!Array.isArray(array)) return;
  //map - перебираючий метод масиву,приймає колбек, який містить 3 парамаетри (value - значення масивів кожне по черзі, index - порядковий номер елментів в масиві, array - це сам масив на якому ми з вами викликаємо метод перебору)
  // map - Він повертає новий масив тієїж довжини,що і той який ви передали дл яперебору але вже з виконаною дією яку ви попросили

  // const result = array.map((value, index, array) => value + 10);
  // return result
  // map - повертає масив`
  return array.map((value, index, array) => value + 10);
}

// pureForFuncPlus - чиста функція
function pureForFuncPlus(array) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    result[index] = array[index] + 10;
  }

  return result;
}

console.log(pureForFuncPlus(numbers1));

console.log(numbers1);

console.log(pureFuncPlus(numbers1));

console.log(numbers1);

const films = [
  {
    author: "any",
    title: "anyTitle",
  },
  {
    author: "any2",
    title: "anyTitle",
  },
  {
    author: "any3",
    title: "anyTitle",
  },
  {
    author: "any4",
    title: "anyTitle",
  },
  {
    author: "any5",
    title: "anyTitle",
  },
  {
    author: "any6",
    title: "anyTitle",
  },
  {
    author: "any7",
    title: "anyTitle7",
  },
];

const authorName = "any7";

const authors = films.map((film) => film.author);
const authorsFilter = films.filter((film) => film.author === authorName);

console.log(authorsFilter);

console.log(authors);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const q = array.filter((number) => number > 5);
const w = array.filter((number) => number > 5);
const e = array.filter((number) => number === 5);

console.log(q);
console.log(w);
console.log(e);

// find - шукає перший збіг за вашою умовою
// повертає розшукуваний обʼєкт
//

const film = films.find((film) => film.title === "anyTitle");
const film7 = films.find((film) => film.title === "anyTitle7");

console.log(film);
console.log(film7);

// && - І - every
// || - або - some

const team = [
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: false,
  },
  {
    name: "NAME",
    readyToProject: true,
  },
  {
    name: "NAME",
    readyToProject: false,
  },
  {
    name: "NAME",
    readyToProject: false,
  },
];

// some - повертає boolean(true або false)
//якщо є хоча б одне true то повератає true

const readyCheck = team.some((teamMember) => teamMember.readyToProject);

console.log(readyCheck);

// every - повертає boolean(true або false)

//якщо є хоча б одне false то повератає false
const everyReadyCheck = team.every((team) => team.readyToProject);

console.log(everyReadyCheck);

// DOM

const users = [
  {
    name: "Petro",
  },
  {
    name: "Artem",
  },
  {
    name: "htos",
  },
  {
    name: "shoc",
  },
];

// const ul = document.createElement("ul");

// users.forEach((user) =>
//   document.body.insertAdjacentHTML(
//     "beforeend",
//     `<li>${user.name}</li> <button class="student">перевірити</button>`
//   )
// );

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers3.filter((item) => item < 3);

// .reduce - метод перебору масиву з батарейкою
// prevValue - поточне значення батарейки
const a = numbers3.reduce((prevValue, number) => {
  console.log(prevValue);
  return (prevValue += number);
}, 0);

const ITDep = [
  {
    name: "Petro",
    sallary: 20000,
  },
  {
    name: "Mangust",
    sallary: 15000,
  },
  {
    name: "htos",
    sallary: 30000,
  },
];

const totalSallary = ITDep.reduce((prevValue, it) => prevValue + it.sallary, 0);

console.log(totalSallary);
// [] - будемо заряджати пустий масив
// const plus = numbers3.reduce((prevValue, number) => {
//   // return (prevValue = prevValue[]);
// }, []);

console.log(a);

const strings = ["q", "w", "e", "a", "c", "b"];
const numbers4 = [5, 3, 20, 50, 21];
// a,b = це два параметри які приймає метод сорт
// a - минуле значення
// b - наступне значення
// (a, b) => b - a) - прохід від найбільшого до найменшого
// (a, b) => a - b) - прохід від найменшого до найбільшого
console.log(numbers4.sort((prev, next) => prev - next));
console.log(strings.sort());

const sortedITDepartment = ITDep.sort(
  (prev, next) => next.sallary - prev.sallary
);
console.log(sortedITDepartment);

//Метод sort - функція з домішками(мотує початковий масив)
//  тож робимо перед сортуванням копії(map(), slice(),[...ITDep].sort())

const people = [
  { name: "Artem", age: 23 },
  { name: "Petro", age: 30 },
  { name: "Arnold", age: 14 },
];
// reduce - калькулятор
//reduce - може замінити усі перебираючі методи масиви
const ageSum = people.reduce((acc, person) => acc + person.age, 0);
console.log(ageSum);
// reduce в данному повератє нам обʼєкт
//першим параметром reduce отримує callback функцію яка отримує параметрами акумулятор(acc) та кожен елемент масиву по черзі(people)
const newObject = people.reduce((acc, people) => {
  //acc - acc - пустий обʼєкт який ми будемо заповнювати
  // [people.name] - people - обʼєкт через крапку звертаємось до значення поля name обʼєкту
  // = people.age; - ми присвоюємо до ключа значення віку кожного з людей
  acc[people.name] = people.age;
  // повертаємо заряджений акумулятор у зовнішній код
  return acc;
  // {} - початкове значення акумулятору
}, {});

console.log(newObject);

// console.log();

const doubleNum = numbers4.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);

console.log(doubleNum);

const fruits = [
  {
    name: "Apple",
    color: "red",
  },
  {
    name: "banana",
    color: "yellow",
  },
  {
    name: "pear",
    color: "green",
  },
  {
    name: "cherry",
    color: "red",
  },
];

//Нам потрібно стоврити обʼєкт в якому у нас будуть у вигляді ключів кольори а у вигляді значень масив з фруктами
const groupedByColor = fruits.reduce((acc, fruit) => {
  // перевірили якщо ключа нема додаємо єму значення пустого масиву
  // acc[fruit.color] - !acc[fruit.color] - якщо такого ключа немає
  // acc[fruit.color] = []; - всім новим елементам за замовчуванням в значення запишеться путсий масив
  if (!acc[fruit.color]) {
    acc[fruit.color] = [];
  }
  // в кожен масив запушили імʼя фрукту
  acc[fruit.color].push(fruit.name);
  // acc[fruit.color] = fruit.name;
  // Повернули результат у зовнішній код
  return acc;
}, {});

console.log(groupedByColor);

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const userss = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getNamesSortedByFriendsCount = (users) => {
  // ланцюжок методів
  //[...users] - робимо копію(Sort - мотує початковий масив данних)
  //sortуемо за довжиною масиву друзів
  // за допомогою map виводимо імена
  return [...users]
    .sort((a, b) => b.friends.length - a.friends.length)
    .map((user) => user.name);
};
// console.log(copyUsers);

userss;

// const names = copyUsers.map((user) => user.name); .map((user) => user.name);
// return copyUsers;

console.log(getNamesSortedByFriendsCount(userss));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = (users) => {
  // твій код
  // .flatMap()

  const allSkills = users.reduce((acc, user) => {
    user.skills.forEach((skill) => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
    });
    return acc;
  }, []);

  return allSkills.sort();
};

console.log(getSortedUniqueSkills(userss));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
