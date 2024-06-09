// BOM

// const language = navigator.language || navigator.userAgent;
// console.log(language);

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//       const { longtitude, latidude } = position.coords;
//     },
//     (error) => {
//       console.log(error.message);
//     }
//   );
// } else {
//   console.log("Геолокація не підтримується");
// }

// const browserInfo = `Браузер ${navigator.appCodeName} , ${navigator.appVersion} `;

// console.log(browserInfo);

const form = document.getElementById("form");

const input1 = document.querySelector(".input1");

const input2 = document.querySelector(".input2");

const button = document.getElementById("click");

// 1. Все що ви робите на сайті це події про які браузер сигналить постійно але ми їх не обробляємо
//2. Щоб відслухати подію на конкретному елементі ми маємо отримати доступ до цього елемента
//3. Додати на цей елемент слухча події (addEventListener)

// addEventListener -додає слухач події
button.addEventListener("click", onClick);
let counter = 0;

// onClick() - обробник події
function onClick(event) {
  // target - Властивість яка повертає HTML-тег на якому відбулась подія
  //currentTarget - властивість яка повертає HTML-тег на якому стоїть обробник події (addEventListener)
  console.log(event.target);
  console.log(event.currentTarget);
  counter += 1;
  if (counter === 3) {
    console.log("Подихайте трохи");
    button.removeEventListener("click", onClick);
    setTimeout(() => {
      button.addEventListener("click", onClick);
    }, 2000);
  }

  console.log("Я молодець, я клацнув по кнопці");
  // removeEventListener - видаляє слухач події
}

// input - подія вводу тексту
// submit - подія відправки форми
form.addEventListener("input", onInput);

function onInput(event) {
  // target - конкретно той елемент на якому відбулась подія
  //   console.log("target: ", event.target.value);

  //form.elements - дитячі елементи форми
  //ми проіменували за допомогою атрибуту name всі дитячі поля(input1,input2)
  // отримали значення через .value
  const input1Value = form.elements.input1.value;
  const input2Value = form.elements.input2.value;

  console.log(form.elements);
  console.log(input2Value);

  const concatValue = input1Value + input2Value;
  form.elements.button.textContent = concatValue;
  // const input2Value
  // currentTarget - завжди той елемент на якому висить addEventListener
  //   console.log("currentTarget: ", event.currentTarget);
}

//

//events
//--submit
//--change
//--input
//--focus
//--blur
//--click

// 1)Написати скрипт відкриття та закриття модального вікна по кнопці.

// 2)Використовуючи попередній код написати скрипт закриття модального вікна по кліку на бекдроп

// 3)Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

// 4) Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// 5)Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// 6. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
