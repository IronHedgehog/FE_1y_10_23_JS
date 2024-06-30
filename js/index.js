// scopes

const a = 10; // global
// const d = 10;
// Все що створюється в фігурних дужках там і залишається, поза межами цих фігурних дужок недоступно
if (a === 10) {
  const d = 10;
  if (d === 10) {
    console.log(d);
    const c = 15;
    if (c === 15) {
      const v = 20;
      console.log(c);
    }
    if (d === 10) {
      //console.log(v); // ERROR
      console.log(c); //
    }
  }
}

{
  const d = 15;
}
// Вспливання

//

// функціональна область бачення
// глобальна

//while(лічильник, авторизація)

// let i = 0;

//if дуже схожий на while
// while - ключове слово для створення циклу
// () - умова для виконання циклу
// поки умова виконується цикл працює
//поки умова виконується буде виконуватись той код що у вас записаний у фігурних дужках
// { } - тіло циклу

// while (i < 10) {
//   //   i = i + 1;
//   //   i += 1;
//   i++;
//   console.log(i);
// }

let auth = false;
// ! - не

//Виконується поки умова true,якщо умова приводиться до false то не виконується жодного разу.

//
// while (!auth) {
//   const password = prompt("Введи пароль");
//   if (password === "123456") {
//     auth = true;
//     alert("Вітаємо вас у системі");
//   } else {
//     alert("Спробуйте ще раз");
//   }
// }

// Задачка на високосний рік

// do while (гра вгадай число)

// Redirect

// do while - спочатку зроби потім подумай
// do while - спочатку зроби потім перевіряє

let ok = false;

// do {
//   ok = confirm(
//     "Чи згодні ви що вас редіректне на іншу сторінку для перегляду бажаного контенту?"
//   );
//   if (ok) {
//     // Таким чином можемо виконати редірект на іншу сторінку.
//     // window.location.href = "http://localhost:5500//";
//   }
// } while (!ok);

// menu

let choice;

// do while - спочатку робить потім перевіряє

//

// do {
//   console.log("1. Новий файл");
//   console.log("2. Відкрити файл");
//   console.log("3. Запустити файл");
//   console.log("4. Вийти");

//   choice = prompt("оберіть варіант один з 4");
// } while (choice !== "4");

// do {
//   i++;
//   console.log(i);
// } while (i < 10);

// for (Все інше xD)

// for - оператор,що запускає цикл
// let index = 0 - лічильник, де ви можете відстежувати поточний номер операції
// index < array.length - умова виходу(коли має завершитись виконнання циклу)
// array.length - довжина масиву
// i++ -  це додавання до індексу одинички(виконується після виконання тіла циклу)
// {} - тіло циклу

// В такому стані це нескінченний цикл
// for (;;) {
//   console.log("Допоможіть");
// }

// 1)створюється лічильник
// 2)перевіряється умова
// 3)Виконується тіло,
// 4)Поствираз

// for (лічильник; умова виходу з циклу(умова завершення); Поствираз(той вираз,що має зробити ваш цикл не безкінечним) виконується після виконання тіла циклу) {
//   console.log("Допоможіть");
// }

// for (let index = 0; i < 10; index++) {
//   i++;
//   console.log(i);
// }

const array = [1, 2, 3, 4, 5];
// console.log("Довжина " + array.length);

for (let index = 0; index < array.length; index++) {
  // array[index]; - це звертання до елементу масиву за індексом
  const element = array[index];
  console.log(element * element);
}

const users = ["Petro", "Tamara", "Roman", "Tetiana", "Artem"];
const random = Math.floor(Math.random() * users.length);
// Math.random() * (max - min) + min
//  i - лічильник який зберігає кількість виконаних ітерацій(скільки разів було запущено цикл) рахується з 0 (перший индекс у масива це 0)
// for (let i = 0; i < users.length; i++) {
//   const element = users[i];
//   if (i === random) {
//     console.log(element + " Переміг та виграв пошану ");
//     // break - повністю зупиняє цикл
//     break;
//   }
//   console.log(element);
// }

// const word = "JavaScript";

// for (let i = 0; i < word.length; i = i + 1) {
//   const element = word[i];
//   console.log(element);
// }

for (let i = 0; i <= 50; i++) {
  if (i === 7) {
    // ПРопусти данний варінт та перейди одразу на наступний
    continue;
  }
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);

  // if (i % 2 === 1) {
  //   console.log(i); // не парне
  // }
  // if (i % 2 === 0) {
  //   console.log(i); //  парне
  // }
}

//break(lottery , Redirect ), continue(парні не парні)
