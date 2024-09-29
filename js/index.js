document.body.addEventListener("click", (event) => {
  // event - обʼєкт події
  console.log(event);
});

// keyUp - відпускання клавіші
// keyDown - натискання клавіші
// keyPress - підтримка( )

// події клавіатури відпрацьовуються на Document

document.addEventListener("keydown", (e) => {
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
  e.preventDefault();

  if ((e.ctrlKey || e.altKey) && e.code === "KeyS") {
    document.body.style.backgroundColor = "black";
  }
});

// Події мишки
