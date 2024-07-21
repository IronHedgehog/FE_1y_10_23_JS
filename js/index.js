console.log(spaceChanger("  asd ", "?"));

// function - функцію
// spaceChanger - імʼя функції

function spaceChanger(str, spaceChangerSymbol) {
  const trimStr = str.trim();
  const stringArr = trimStr.split(" ");
  let string = "";

  for (const character of stringArr) {
    string += character + spaceChangerSymbol;
  }
  const split = string.split("");
  split.pop();
  string = split.join("");

  return string;
}

console.log(spaceChanger("     Ми дуже любимо вивчати JS     ", "-"));
console.log(spaceChanger("Ми написали класну функцію", "_"));

// hoisting - всплиття

const spaceChangerArrow = (str, spaceChangerSymbol) => {
  const trimStr = str.trim();
  const stringArr = trimStr.split(" ");
  let string = "";

  for (const character of stringArr) {
    string += character + spaceChangerSymbol;
  }
  const split = string.split("");
  split.pop();
  string = split.join("");

  return string;
};

// => має вмонтований ретурн

const plus = (a, b) => a + b;

console.log(plus(1, 2));

const a = 5;

const arrowFunc = (a = 0, b = 0, c = 0, d = 0, e = 0, f = 0) => {
  console.log("a :>> ", a);
  console.log("b :>> ", b);
  console.log("c :>> ", c);
  console.log("d :>> ", d);
  console.log("e :>> ", e);
  console.log("f :>> ", f);
  return a + b + c + d + e + f;
};

console.log(arrowFunc(a, 4, 3, 2, 1, 0));

console.log(arrowFunc(5));

function signUp(userName = "Anonyms", email, password) {
  //throw new Error - викинь екземляр класу Помилка
  if (!email) throw new Error("Введи емейл");
  if (!password) throw new Error("Введи пароль");

  console.log(arguments);
  const arg = Array.from(arguments);

  console.log(arg);
  console.log(`Вітаю ви успішно зареєструвались ${userName}`);
}

signUp("Artem", "email@email.com", "Пароль");

function plusFunc() {
  const argArr = Array.from(arguments);
  let sum = 0;

  for (let i = 0; i < argArr.length; i++) {
    sum += argArr[i];
  }
  return sum;
}

console.log(
  plusFunc(1, 2, 3, 4, 5, 6, 7, 7, 8, 88, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
);
