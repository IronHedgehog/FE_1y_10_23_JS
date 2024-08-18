// // const numbers = [20, 10, 60, 70, 40];

// // //min() - очікує набір окремих чисел (1,2,3,4,5,6)
// // //min() - [] - масив -це не число
// // console.log(Math.min(numbers)); // NaN

// // console.log(numbers);
// // // spread - розділення
// // console.log(...numbers);
// // console.log(Math.min(...numbers));
// // // arguments (arguments)
// // // ...rest (Збирає масиви)
// // const func = (a, b, c, ...numbers) => {
// //   console.log(...numbers);
// // };

// // func(20, 102, 30, 405, 20, 10, 20, 30, 405);

// // const legoCollection = ["newLego", ...numbers, "newLego"];

// // const obj = {
// //   a: "a",
// //   b: "b",
// // };

// // const newObjects = {
// //   c: "c",
// //   ...obj,
// //   d: "d",
// // };

// // console.log(newObjects === obj);
// // console.log(legoCollection);

// const a = {
//   name: "Petro",
// };

// const zyctrichSybota = {};

// const zyctrcih1Sybota = zyctrichSybota;

// console.log(zyctrichSybota === zyctrcih1Sybota);

// const zyctrichNedilia = {};

// const zyctrich1Nedilia = zyctrichNedilia;

// console.log(zyctrichNedilia === zyctrich1Nedilia);

// // Ці зустрічі вони мають різне посилання
// console.log(zyctrichSybota === zyctrichNedilia);

// const b = { ...a };

// console.log(a);
// console.log(b);

// // Стандартна поведінка складних типів данних
// console.log(a === b);
// console.log(a == b);

// // number - зберігається значення у памʼяті бо це примітив
// const c = 5;

// // objects - складний тип даних до якого відносяться масиви обʼєкти

const obj = {
  name: "Petro",
  lastName: "Trendelis",
  age: 30,
  proGamer: false,
  // Метод обʼєкта
  goWalk() {
    console.log("Піти гуляти");
  },
};

//
const namee = obj.name;
const lastNamee = obj.lastName;
const proGamerr = obj.proGamer;
const agee = obj.age;

console.log(namee);
//Деструктуризація
// Ключове слово
// {} - літерал обʼєкта (Позначають обʼєкт)
//{ назва поля значення якого ми хочемо отримати у швидкий доступ }
// = - привласнення
//obj - з якого обʼєкту ми бажаємо привласнити значення цього поля
const {
  name: userName,
  lastName,
  age,
  proGamer,
  goWalk,
  terms = "false",
} = obj;

const { name: nameeee, ...rest } = obj;

console.log(rest);

//  name: userName, - : назву нової змінної
// terms = "false" - значення за замовчуванням
console.log(userName, terms);

goWalk();

//
const nameee = userName;
const lastNameee = lastName;
const proGamerrr = proGamer;
const ageee = age;

// Привіт, ваш нікнейм
