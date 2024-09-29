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

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
];

const ulGallery = document.querySelector("#gallery");
const mapGallery = images
  .map((image) => {
    return `<li><img class="img" src="${image.url}" alt="${image.alt}" width="300" height="200"></li>`;
  })
  .join("");

ulGallery.insertAdjacentHTML("beforeend", mapGallery);
ulGallery.style.display = "flex";
ulGallery.style.listStyle = "none";
ulGallery.style.justifyContent = "space-between";
