// join- split

const message =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit . Eum nam error rerum tempora rem repellat hic, ducimus distinctio impedit dolores id fugiat incidunt officiis tenetur odit harum culpa repudiandae quibusdam sequi, molestias, perspiciatis et eveniet obcaecati nemo? Pariatur, esse qui porro aliquid eum dolorum asperiores non accusantium alias nam quaerat natus soluta delectus iusto tempore eius itaque, unde aspernatur officia commodi corrupti ea odio ducimus debitis. Optio minima odit fugiat eius sit omnis dicta vel ipsum rem, doloremque deleniti officia tempora corrupti explicabo tenetur assumenda aspernatur pariatur nostrum suscipit iste facilis, ipsa amet! Nostrum inventore magni unde molestias in accusamus.";
// TODO: regexp на розділові знаки
// split - розділити
// Спліт розділяє строку та збирає значення в масив
const arr = message.split(".");
// join -  збирає елементи масиву у одну строку
console.log(arr.join(" "));

const arr1 = [1, 2, 6, 4, , 4, 5, 10, 5, 6];

// includes - перевіряє чи є елемент в масиві та повертає буль
console.log(arr1.includes(10));
// indexOf -  повертає індекс першого співпадіння
console.log(arr1.indexOf(6));

const arr2 = [1, 3, 2, 4, 56, 10, 7, 8, 9];
// Копіюємо масив,щоб зберегти дані які ми отримали з БД недоторканими
// перший параметр - це індекс з якого має початись вирізання(start)
// другий параметр - це індекс кінця(де завершити копіювання) (end)
// нижні два записи ідентичні
// const arr2Copy = arr2.slice(0, arr2.length);
const arr2Copy = arr2.slice();
const arr3Copy = arr2.slice();

const winners = arr2.indexOf(56);

const arr2CopyCopy = arr2.slice(0, winners);
console.log(arr2CopyCopy);

//метод push додає елементи в кінець масиву, повератає довжина нового масиву
console.log(arr2.push(20));

console.log(arr2);

// pop() - то він видаляє елемент з кінця масиву.
// () - виклик методу
// Повертає видалений елемент
arr2.pop();

console.log(arr2);

// shift - метод який видаляє з початку масиву, повертає видалений елемент
console.log(arr2.shift());
console.log(arr2);

// unshift - додає ,будь-яку, кількість елементів на початок вашого масиву, повертає довжину новго масиву.

console.log(arr2.unshift(1, 2, 3, 4, 5));

console.log(arr2);

// slice

console.log(arr2Copy);

//

const arr2Humans = arr2Copy.splice(
  0,
  arr2Copy.length,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
);

console.log(arr2Copy);
console.log(arr2Humans);

const randomElement = Math.floor(Math.random() * 8 + 1);

const arr2HumansSplice = arr2Humans.splice(
  randomElement,
  arr2Humans.length,
  1,
  2,
  3,
  4,
  5,
  6,
  7
);
// asdfghjklqwsss
console.log(arr2HumansSplice);

console.log(arr2Humans);

console.log(arr3Copy);

console.log(arr3Copy[1]);
// start - індекс початкового елементу з якого треба почати видалення

// другий параметр - кількість елементів яку треба видалити

console.log(randomElement);
const winner = arr3Copy.splice(randomElement, 1);
console.log(winner);

const arr3Splice = arr3Copy.splice(1, 4);

console.log(arr3Splice);
// Метод конкат обʼєднує всі передані масиви в один(той на якому він був викликаний)
const arrWorked = arr2.concat(arr2Humans, arr2HumansSplice, winner, arr3Splice);

console.log(arrWorked);

const coloborator = [10, 11, 12, 13, 14, 15];

const We = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const lotery = We.concat(coloborator);

console.log(lotery);

const trelloCards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
