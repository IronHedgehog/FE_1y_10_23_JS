const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const ul = document.querySelector('.ul');
// const li = document.querySelectorAll('.ul > li');

// li.forEach(li => {
//   li.addEventListener('click', liOnClick);
// });

// function liOnClick(e) {
//   console.log('liOnClick');
// }

div1.addEventListener('click', onClick);
div2.addEventListener('click', onClick2);
div3.addEventListener('click', onClick3);

ul.addEventListener('click', onClickLi);

function onClick(e) {
  console.log(e.currentTarget);
  console.log(e.target);
}

function onClick2(e) {
  // e.stopPropagation();
  console.log(e.currentTarget);
}

function onClick3(e) {
  e.stopPropagation();
  console.log(e.currentTarget);
}

function onClickLi(e) {
  // console.log(e.target.nodeName);
  //Перевіряє чи клацнули ви по необхідному елементу
  if (e.target.nodeName === 'BUTTON') {
    console.log(e.currentTarget);
    console.log(e.target.textContent);
  }

  if (e.target.classList.contains('li')) {
    console.log(e.currentTarget);
    console.log(e.target.textContent);
  }

  e.target.classList.remove('li');
}

// -------------------------------------|?

const span = document.querySelector('.span');
const div = document.querySelector('.color-palette');

div.addEventListener('mou', onColorClick);
div.addEventListener('mouse');

function onColorClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const color = e.target.dataset.color;

  ul.style.backgroundColor = color;
  span.textContent = `${color}`;
  span.style.color = color;
}

function createColors() {
  const items = [];
  for (let index = 0; index < 10000; index++) {
    const color = getRandomColor();
    const button = document.createElement('button');
    button.dataset.color = color;
    button.style.backgroundColor = color;
    button.classList.add('item');
    items.push(button);
  }
  div.append(...items);
}
createColors();

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
