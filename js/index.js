const title = document.getElementById("title");
const img = document.querySelector(".img-fluid");
const link = document.querySelector(".link");
const hero = document.getElementById("hero");

// textContent дозволяє взаємодіяти з текстовим контентом вашого тегу
title.textContent = "Петро";
// .value - дозволяє отримати значення з інпутів

// img.src = "";

link.href = "shoc";

const div = document.createElement("div");
//Створений елемент одного разу має використовуватись в одному місці

div.className = "container";
div.textContent = "DIV";
// append - додає на сторінку контент який ми створили
hero.append(div);
// prepend - додає перед усіма дітьми
document.body.prepend(div);

// document.body.after(div);
document.body.before(div);
// додати дитину
hero.appendChild(div);
// якщо є необхідність видалити дом вузол використовуйте remove()
// hero.remove();

// innerHtml - в основному використовується для видалення контенту

document.body.innerHTML = "";
// repaint reflow
document.body.innerHTML = "<h1>HELLO WORLD</h1>";
