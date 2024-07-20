// 1)Створіть масив з 5 чисел.Використайте метод push(), щоб додати ще одне число в кінець масиву.

// 2)Дано масив[1, 2, 3, 4, 5].Використайте метод pop(), щоб видалити останній елемент, а потім виведіть новий масив.

// 3)Створіть масив з іменами фруктів. Використайте метод indexOf(), щоб знайти позицію "яблука" в масиві.

// 4) Створіть масив імен. Використайте цикл for та метод push(), щоб створити новий масив, який містить тільки імена, довжина яких більше 5 символів.

// 5)Дано масив чисел.Використайте цикл for, щоб знайти суму всіх елементів масиву.

// 6**) Створіть масив рядків. Використайте цикл for та методи push() і charAt(), щоб створити новий масив, який містить тільки перші літери слів.

// 7 ***)Створіть масив чисел та змінну з числовим значенням.Використайте цикл for та метод push(), щоб створити новий масив без елементів, що дорівнюють змінній з числовим значенням.

// 8***)Створіть два масиви чисел. Використайте цикли та умовні оператори, щоб знайти спільні елементи цих масивів та створити новий масив з цими елементами.

let comparedArray = [];
const nonComparedArray1 = [];
const nonComparedArray2 = [];
for (let i = 0; i < 8; i++) {
  // різні рандомні масиви створює
  nonComparedArray1[i] = Math.floor(Math.random() * 21);
  nonComparedArray2[i] = Math.floor(Math.random() * 21);
}

for (let i = 0; i < nonComparedArray1.length; i++) {
  for (let j = 0; j < nonComparedArray2.length; j++) {
    const elementspysok1 = nonComparedArray1[i];
    const elementspysok2 = nonComparedArray2[j];
    if (elementspysok1 === elementspysok2) {
      if (comparedArray.includes(elementspysok1)) {
        continue;
      } else {
        comparedArray.push(elementspysok1);
      }
    }
  }
}

// for (let i = 0; i < nonComparedArray1.length; i++) {
//   const elementspysok1 = nonComparedArray1[i];
//   const elementspysok2 = nonComparedArray2[i];
//   //   console.log(elementspysok1);
//   //   console.log(elementspysok2);
//   if (nonComparedArray1[i] === nonComparedArray2[i]) {
//     comparedArray.push(nonComparedArray1[i]);
//   }
// }
console.log(nonComparedArray1);
console.log(nonComparedArray2);
console.log(comparedArray);
