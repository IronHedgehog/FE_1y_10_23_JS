// Перевірка паролю (if...else):
// створіть блок if else який приймає пароль і перевіряє його на відповідність наступним критеріям:
// Довжина не менше 8 символів
// Вивести console.log() "Пароль прийнято" або відповідне повідомлення про помилку.

// Алгоритм вирішення задачі

// 1)Створити input

// 2)Знайти цей інпут

const inputElement = document.getElementById("qwe");
// Додати слухач події
inputElement.addEventListener("input", onInput);

function onInput(e) {
  //  знайти значення input
  console.log(e.target);
  const value = e.target.value;
  console.log(value);
  const valueLength = inputElement.value.length;
  console.log(valueLength);
  const result = valueLength >= 8 ? "Пароль прийнято" : "Пароль не прийнято";
  console.log(result);
}

// перевірити довжину value
//

// Конвертер оцінок (switch case):
// Створіть switch case, який конвертує числову оцінку(0 - 100) у літерну(A, B, C, D, F).Використайте такі діапазони:
//     A: 90 - 100, B: 80 - 89, C: 70 - 79, D: 60 - 69, F: 0 - 59.

const mark = parseInt(90);

// console.log(mark >= 90 && mark <= 100);

switch (mark) {
  case mark >= 90 && mark <= 100:
    console.log("A");
    break;

  case mark >= 80 && mark <= 89:
    console.log("B");
    break;

  case mark >= 70 && mark <= 79:
    console.log("C");
    break;

  case mark >= 60 && mark <= 79:
    console.log("D");
    break;

  case mark >= 0 && mark <= 59:
    console.log("F");
    break;

  case 50:
    console.log("50");
    break;

  default:
    console.log("оцінки немає");
    break;
}

// Визначення сезону (if...else if):
// Напишіть if else, яка приймає номер місяця(1 - 12) і повертає, до якого сезону він належить.

// Калькулятор знижки (тернарний оператор):
// Створіть тернарний оператор, який обчислює знижку на товар.Якщо сума покупки більше 1000, знижка 10 %, інакше 5 %.Використайте тернарний оператор.

// Перевірка року на високосність (if...else):
// Створіть блок if else, який перевіряє, чи є рік високосним. Рік високосний, якщо він ділиться на 4, але не на 100, або якщо він ділиться на 400.

// Світлофор (if...else if та switch case):
// Напишіть два варіанти (з використанням if...else if та switch case),  приймає колір світлофора і повертає дію ("Йдіть", "Приготуйтесь", "Стійте").

const color = "klamskld";

switch (color) {
  case "green":
    console.log("Йдіть");
    break;
  case "yellow":
    console.log("Приготуйтесь");
    break;
  case "red":
    console.log("Стійте");
    break;

  default:
    console.log("Світлофор не робе");
    break;
}

// Абсолютне значення (тернарний оператор):
// Напишіть тернарний оператор, який повертає абсолютне значення числа(-3 = 3, 10 = 10)

// Категоризація віку (if...else if):
// Створіть блок if else, яка приймає вік і повертає категорію: "Дитина"(0 - 12), "Підліток"(13 - 19), "Дорослий"(20 - 64), "Пенсіонер"(65 +).
const age = 14;

if (age <= 13) {
  console.log("Дитина");
} else if (age >= 13 && age <= 19) {
  console.log("Підліток");
} else if (age >= 20 && age <= 64) {
  console.log("Дорослий");
} else if (age >= 65) {
  console.log("Пенсіонер");
}

// Вибір способу оплати (switch case та тернарний оператор):
// Напишіть функцію, яка приймає спосіб оплати(готівка, кредитна картка, PayPal) і суму.Поверніть повідомлення про комісію: 0 % для готівки, 2 % для кредитної картки, 3 % для PayPal.
// Використайте switch case для вибору способу оплати та тернарний оператор для визначення, чи потрібно додавати слово "комісія" до відповіді.

const number = 10;

for (let index = 1; index <= number; index++) {
  console.log(index);
}
