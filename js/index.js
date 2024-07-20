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
