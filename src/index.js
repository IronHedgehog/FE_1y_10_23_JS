let start = new Date();

// new Date() - поточна дата та час на вашому місцізнаходження
const constDate = new Date(Date.now());

const now = Date.now();

console.log(now);
// .now() - повертає час з 70го року до зараз у мілісекундах
// .getDate() - повертає значення з 1 до 31
const date = constDate.getDate();
console.log(date);
// .getDay(); - повертає від 0 до 6
const day = constDate.getDay();
console.log(day);
// .getMonth() - повертає від 0 до 11
const month = constDate.getMonth();
console.log(month);
const year = constDate.getFullYear();
console.log(year);

const hours = constDate.getHours();
console.log(hours);

const minutes = constDate.getMinutes();
console.log(minutes);

const seconds = constDate.getSeconds();
console.log(seconds);
const mls = constDate.getMilliseconds();
console.log(mls);

const time = constDate.getTime();
console.log(time);

let result = '';

result += day + '/';
result += date + '/';
result += month + '/';
result += year;
console.log(result);
result += ' Time: ' + hours + ':';
result += minutes + ':';
result += seconds + ':';
result += mls;
console.log(result);

const dateDate = new Date();

const options = {
  // day - число
  day: '2-digit',
  //weekday - назва дня
  weekday: 'short',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  // hourCycle: 'h12',
  minute: '2-digit',
};

const locale = navigator.language;
console.log(locale);
const localeUk = dateDate.toLocaleString(locale, {});
console.log(localeUk);

// Перетворення дати до числа

let newDate = new Date();
// Коли ми переводимо дату у число то ми отримуєм у UNIX часі поточну дату
console.log(Number(newDate));
// + - неявне приведення до числа
console.log(+newDate);

const timee = newDate.getTime();
console.log(timee);
// Початок відліку

// Обчислення різниці між датами

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }
// Кінець відліку
let end = new Date();

console.log(start);
console.log(end);

console.log(`Цей важкий цикл зайняв ${end - start}ms`);

// let newDateMarch = new Date('March 8,2025');
let newDateMarch = new Date('2025-03-08T08:00:00');

console.log(newDateMarch);

const dateEight = Number(newDateMarch) - Number(newDate);

let marchHours = newDateMarch.getHours();
let marchMinutes = newDateMarch.getMinutes();
let marchSeconds = newDateMarch.getSeconds();
let marchMS = newDateMarch.getMilliseconds();

console.log(marchHours, marchMinutes, marchSeconds, marchMS);
// console.log(marchTime);

console.log(dateEight);

let newTime = new Date(dateEight);

console.log(newTime);

// YYYY(year)-MM(month)-DD(day)T(роздільник)HH(hours):mm(minutes)-ss(seconds).
let newTimee = Date.parse('2025-02-01T20:10:50');

console.log(newTimee);
