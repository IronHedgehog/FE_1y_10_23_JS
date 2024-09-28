// 1-й варіант, але він робить не за одну операцію

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingradientUl = document.getElementById("ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const element = ingredients[i];
  const lishka = document.createElement("li");
  lishka.textContent = element;
  //   ingradientUl.append(lishka);
}

const ingridientsMap = ingredients.map((ingridient) => {
  const lishka = document.createElement("li");
  lishka.textContent = ingridient;
  return lishka;
});

console.log(ingridientsMap);

// метод append - він не може працювати з масивами
// ... - rest,spread оператор
ingradientUl.append(...ingridientsMap);
// ingradientUl.append(li, li, li, li, li, li);

const sagalnaUl = document.getElementById("categories");
const categories = document.querySelectorAll(".item");
const categoriesNumber = categories.length;
console.log(`У списку ${categoriesNumber} категорії.`);
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent; // Отримати заголовок
  const elementsCount = category.querySelectorAll("li").length; // Підрахувати кількість li всередині ul
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});
