const name = "                   Artem is here                      ";
const nameLength = name.trim().length;

// .trim() - метод для обрізання пробілів перед буквами та після букв (метод)
//
//length - довжина (властивість)
console.log(name);
console.log(nameLength);

const string = "shoc";
// s = 0
// h = 1
//0 = 2
// c = 3

const stringLength = string.length; // 4

const string2 = name + string;

console.log(string2.length - 1);

const string3 = "ABC" + name + "CBA" + " " + "BAC"; // Конкатенація
const string4 = `ABC CBA, ${name}  ,BAC`; // інтерполяція

console.log(string3);
console.log(string4);

console.log(string2);

const string5 = "SaLe";

const postCard = "sAlE";
if (postCard.toLowerCase() === "sale") {
  console.log(postCard.toLowerCase());
  console.log(postCard.toUpperCase());
  console.log("Піймали та видалили спам");
}

const string6 = "s i x";
console.log(string6.indexOf(" ")); // -1
console.log(string6.indexOf("S")); //чутливий до регістру
console.log(string6.indexOf("x")); // 0
// indexOf() - повертає індекс символа у рядку
// -1 - index то індекс який повертається якщо нічого не знайдено
// indexOF()- оперує тільки числами
// indexOf - чутливий до регістру
// Знаходить тільки перше співпадіння

const string7 = "String";
// Чи включає змінна string7 у себе ВЕЛИКУ літеру S?
console.log(string7.includes("string"));

// includes() - повертає true або false
// чутливий до регістру

const string8 = "something.txt";

// чи починається рядок в змінній string8 з вказаних символів?
console.log(string8.startsWith("some"));
// чи закінчується рядок в змінній string8 з вказаних символів?
console.log(string8.endsWith(".txt"));
// повертає true або false

const string9 =
  "                A                                        R          ";
// trim() - видаляє пробіли на початку та вкінці рядка
console.log(string9.trim());

const string10 = "String10";

console.log(string10.padStart(2, "A"));
// 2 56 37
const hours = "5";

console.log(hours.padStart(2, 0));

// padStart (2)
//padStart - перший параметр вказує на те скільки символів має бути у рядку
// Якщо така кількість символів вже є то padStart поверне вам рядок з яким працює
// Додає всі символи на початок рядка
// padEnd;() - додає символи в кінець рядка
console.log(string10.padEnd(20, "r"));

console.log(`${string10}`);

const user = "Yura";

console.log(`Привіт, ${user}`); // інтерполяція
