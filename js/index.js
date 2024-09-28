const title = document.getElementById("title");
const img = document.querySelector(".img-fluid");
const link = document.querySelector(".link");
const hero = document.getElementById("hero");

// textContent дозволяє взаємодіяти з текстовим контентом вашого тегу
// title.textContent = "Петро";
// .value - дозволяє отримати значення з інпутів

// img.src = "";

// link.href = "shoc";

const div = document.createElement("div");
//Створений елемент одного разу має використовуватись в одному місці

div.className = "container";
div.textContent = "DIV";
// append - додає на сторінку контент який ми створили
// hero.append(div);
// prepend - додає перед усіма дітьми
document.body.prepend(div);

// document.body.after(div);
document.body.before(div);
// додати дитину
// hero.appendChild(div);
// якщо є необхідність видалити дом вузол використовуйте remove()
// hero.remove();

// innerHtml - в основному використовується для видалення контенту

document.body.innerHTML = "";

//Cпочатку зачщує усе body
// Потім рендерить контент який ти попросив
document.body.innerHTML = "<h1>HELLO WORLD</h1>";

const text = "<h1>asdasdasdasdas</h1>";
// console.log(text);
// "beforeend"

const arr = [
  { id: 1, name: "9" },
  { id: 1, name: "1" },
  ,
  { id: 1, name: "2" },
  ,
  { id: 1, name: "3" },
  ,
  { id: 1, name: "4" },
  ,
  { id: 1, name: "5" },
  ,
  { id: 1, name: "6" },
  ,
  { id: 1, name: "7" },
  { id: 1, name: "8" },
];

const arrMap = arr
  .map(({ id, name }) => {
    return `<h1 class="h1"> id ${id}</h1> <h2> name: ${name}</h2> `;
  })
  .join("");

document.body.insertAdjacentHTML("beforeend", arrMap);

const hasd = document.querySelector(".h1");

console.log(hasd.attributes);

hasd.setAttribute("style", "background-color: red");
hasd.removeAttribute("style");
