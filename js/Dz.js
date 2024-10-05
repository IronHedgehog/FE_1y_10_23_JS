// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)
// P.S. HTML код та CSS у файликах DZ

// Знаходимо елементи для роботи

const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImg = document.querySelector(".full-image");
let currentIndex = 0;

//Обробники кліку на зображення
images.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    showFullImage(index);
  });
});

const showFullImage = (index) => {
  currentIndex = index;
  fullImg.src = images[index].src;
  fullImageContainer.classList.add("show");
};

fullImageContainer.addEventListener("click", (e) => {
  if (e.target === fullImageContainer) {
    fullImageContainer.classList.remove("show");
  }
});

// опрацювати події клавіатури

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (fullImageContainer.classList.contains("show")) {
    if (e.code === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showFullImage(currentIndex);
    }

    if (e.code === "ArrowLeft") {
      currentIndex = (currentIndex - 1) % images.length;
      if (currentIndex === -1) {
        currentIndex = 0;
      }
      showFullImage(currentIndex);
    }
  } else {
    const scrollWidth = 300;
    if (e.code === "ArrowRight") {
      gallery.scrollLeft += scrollWidth;
    }
    if (e.code === "ArrowLeft") {
      gallery.scrollLeft -= scrollWidth;
    }
  }
});

// 2. Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

const createBoxes = function (amount, callback) {
  const numBoxes = Number(amount);
  for (let i = 0; i < numBoxes; i++) {
    const size = 30 + i * 10;
    const element = document.createElement("div");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.textContent = `Box ${i + 1}`;
    element.style.backgroundColor = randomRgb();
    divForModifying.append(element);
  }
};

function randomRgb() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

const input = document.querySelector(".input");

input.addEventListener("input", inputValueFunction);

let inputValue = 0;
const inputValueFunction = function (event) {
  inputValue = event.target.value;
};

const divForModifying = document.getElementById("boxes");

const createButton = document
  .querySelector('[data-action="render"]')
  .addEventListener("click", () => {
    createBoxes(inputValue);
  });

const deleteBoxes = function () {
  divForModifying.innerHTML = "";
};
const deletingButton = document
  .querySelector('[data-action="destroy"]')
  .addEventListener("click", deleteBoxes);
