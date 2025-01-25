// new Date() - поточна дата та час на вашому місцізнаходження
const timeOnMS = Date.now();
const constDate = new Date(Date.now());
console.log(constDate);
// .now() - повертає час з 70го року до зараз у мілісекундах

// asdsassdsasdsdsdsdsdsdsdsdsdsdssdsdsdsdasdasdasdasdasdasdasdasdasdasdasdasdasdqweqweqweqweqweqweqweqweqweqweqweqweqweqweqws
console.log(timeOnMS);
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
console.log(dateDate);

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
const localeUk = dateDate.toLocaleString(locale, options);
console.log(localeUk);

// Перетворення дати до числа
// Обчислення різниці між датами
