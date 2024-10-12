"use strict";

document.body.addEventListener("click", (event) => {
  // event - обʼєкт події
  console.log(event);
});

// keyUp - відпускання клавіші
// keyDown - натискання клавіші
// keyPress - підтримка( )

// події клавіатури відпрацьовуються на Document

document.addEventListener("keydown", (e) => {
  console.log(e);
  // унікальний Код фізичної клавіші
  console.log("code - ", e.code);
  // Повертає символ який має бути згенеровано
  console.log("key - ", e.key);
  console.log("key - ", e.keyCode);
  // keyCode -
  //
});

document.addEventListener("keydown", (e) => {
  //  preventDefault() - заблокувати дії браузера за замовчуванням
  // Можемо вигадати будь-які комбінації вимкнути їх в браузері та перевизначити на наші які нам потрібно
  // e.preventDefault();

  if ((e.ctrlKey || e.altKey) && e.code === "KeyS") {
    document.body.style.backgroundColor = "black";
  }
});

// Події мишки

// mousemove

const cursor = document.querySelector(".cursor");
const button = document.querySelector(".button");
const cursorIcon = document.getElementById("cursor-icon");
const svg = document.querySelector(".cursor-icon");

document.addEventListener("mousemove", updateMousePosition);

function updateMousePosition(e) {
  // CSS
  // cursor.offsetWidth; - поточний розмір елемента
  // console.log(cursor.offsetWidth);
  cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
  // e.clientY - cursor.offsetWidth / 2 - центрування курсору в залежності від його розміру
  cursor.style.top = `${e.clientY - cursor.offsetWidth / 2 + 15}px`;
}

button.addEventListener("mouseover", onMouseOver);

function onMouseOver(e) {
  cursorIcon.setAttribute("href", "../symbol-defs.svg#hover-cursor");

  svg.style.fill = "white";
}

button.addEventListener("mouseout", onMouseOut);

function onMouseOut(e) {
  cursorIcon.setAttribute("href", "../symbol-defs.svg#default-cursor");
  svg.style.fill = "deeppink";
}

button.addEventListener("dblclick", (e) => {
  console.log("Стався даблклік");
});

button.addEventListener("contextmenu", (e) => {
  console.log(e);
  e.preventDefault();
});

button.addEventListener("mousedown", (e) => {
  cursorIcon.setAttribute("href", "../symbol-defs.svg#grab-cursor");
});

button.addEventListener("mouseup", (e) => {
  cursorIcon.setAttribute("href", "../symbol-defs.svg#hover-cursor");
});
