// DOM - Дозволяє отримати доступ до HTML тегів та атрибутів та їх замінювати або проводити якісь інші дії

// document - це наша HTML сторінка

const navButton = document.querySelector(".nav-button");
// достатньо популярні
// document.getElementById();
// отримує HTML елемент за його ID
// document.getElementsByClassName();
// отримує HTML елементи за його class
// Популярні
// document.querySelector();
// Дозволяє вам отримати доступ до HTML тегу за будь-якою ознакою
// .querySelector() - якщо багато співпадінь, знайде тільки перший збіг

// ознака - id,class,атрибут, тег
// document.querySelectorAll();
// querySelectorAll(); - знаходить всі елементи з однаковою ознакою

console.log(navButton);

// textContent - звертається до текстового наповнення HTML елементу
navButton.textContent = "ТОвару немає";

// Щоб отримати доступ до будь-якого HMTL елемента ми маємо використати один з методів наведених вище (зазвичай querySelector())
const input = document.querySelector(".input");
console.log(input.value);
//.value - це html атрибут тегу input який зберігає значення input
//  <input class="checkbox" type="checkbox" />
const checkbox = document.querySelector(".checkbox");
checkbox.checked = true;

const img = document.getElementById("img");
img.src = "../img/flower.jpg";

// const navBar = document.querySelector(".header-nav");

// document.body - до тегу body можна звернутись напряму через документ
// JS

document.body.style.backgroundColor = "darkblue";
// CSS
// body {
// backgroundColor: darkblue
// }

const dark = document.querySelector(".dark");
const white = document.querySelector(".white");

// dark.addEventListener("click", darkTheme);
// white.addEventListener("click", whiteTheme);

// function darkTheme(e) {
//   document.body.style.backgroundColor = "darkblue";
// }

// function whiteTheme(e) {
//   document.body.style.backgroundColor = "white";
// }

// classList - список класів
// add - додати
white.classList.add("something");
// remove - видалити
white.classList.remove("something");
console.log(white.classList);
// toggle - працює в обидві сторони може додати та видалити
white.classList.toggle("something");
// contains - чи включає класліст такий клас?
white.classList.contains("asasdasdasd");
console.log(white.classList.contains("somasdasdething"));

// events 5
// if else switch case 6
