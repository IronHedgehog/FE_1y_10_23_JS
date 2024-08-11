const obj = {
  name: "Artem",
  age: 23,
  city: "Kharkiv",
};

const copyObj = {
  ...obj,
  asd: "asd",
  email: "asd@asd.com",
  password: "qwerty12345@&",
};

// copyObj.email = "asd@asd.com";
// copyObj.password = "qwerty12345@&";

console.log(copyObj);

const obj1 = {
  name: "Artem",
  age: 23,
  city: "Kharkiv",
};
// Складний тип даних (обʼєкт)
// Адреса Фонатнова 6
// Адреса Олексія 8

// Всі складні типи даних порівнюються за адресою(посиланням на їх місце у Купі)
console.log(obj === obj1);

const asd = {
  a: "B",
};
// Примітив
const number = 5;

const arr = [1, 2, 3, 4, 5];

let result = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
  result += element;
}

console.log(result);

// for (const key of obj) {
//   console.log(key);
// }

// OBJECT IS NOT ITERABLE (NO)

// MAGIC

// for ... in
for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

console.log("abc");

// Object.keys(), Object.values(), Object.entries()

// Object.keys(obj) - Повертає масив ключів обʼєкту
console.log(Object.keys(obj));
//Object.values() - повератає масив значень обʼєкту
console.log(Object.values(obj));
// Object.entries() - повертає матрицю(в кожному вкладеному масиві пара ключ значення)
console.log(Object.entries(obj));

// ...Spread(Розпилення)

// ...spread оператор для обʼєктів в основному необхідний для копіювання
//Беремо обʼєкт і передаєм по черзі кожну властивість обʼєкту
// 1) name: "Artem", перенесли це
// 2)  age: 23,
// 3) city: "Kharkiv",
const object = { ...obj };
const string = "asd";
const string1 = "asd";
const string3 = "obj";
// Примітиви порівнюються та зберігаються за значеннями
console.log(string === string1);
// Обʼєкти та складні типи данних порівнюються за посиланням у памʼяті(купі)
console.log(obj === string3);

console.log(object);

const arr1 = [1, 2, 3, 4, 5];
const copyArr1 = [...arr1, 6, 7, 8, 9, 10];

console.log(arr1 === copyArr1);
