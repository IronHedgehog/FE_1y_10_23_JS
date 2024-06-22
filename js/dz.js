// 1)Не розумію щодо eventlistener як зрозуміти на що це вішати,
//  2)а також чи треба робити два івента на одній формі(наприклад, submit та input)

const form = document.getElementById("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault(); // запобігти діям браузеру за замовчуванням

  // form.elements - всі елементи форми

  // .toLowerCase() - до нижнього регістру
  //.trim() - зрізає пробіли з початку та кінця рядка
  const day = form.elements.day.value.trim().toLowerCase();

  switch (day) {
    case "понеділок":
      console.log("День робочий");
      break;
    case "вівторок":
      console.log("День робочий");
      break;
    case "середа":
      console.log("День робочий");
      break;
    case "четвер":
      console.log("День робочий");
      break;
    case "пʼятниця":
      console.log("День робочий");
      break;
    case "субота":
      console.log("День вихідний");
      break;
    case "неділя":
      console.log("День вихідний");
      break;

    default:
      console.log("Це не день тижня");
      break;
  }

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (password.length > 6) {
    console.log("це пароль");
  } else {
    console.log("Спробуйте шось вигадать краще за qwerty");
  }
}

// Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
