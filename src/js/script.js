const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const ul = document.querySelector('.ul');

div1.addEventListener('click', onClick);
div2.addEventListener('click', onClick2);
div3.addEventListener('click', onClick3);

ul.addEventListener('click', onClickLi);

function onClick(e) {
  console.log(e.currentTarget);
}

function onClick2(e) {
  // e.stopPropagation();
  console.log(e.currentTarget);
}

function onClick3(e) {
  console.log(e.currentTarget);
}

function onClickLi(e) {
  console.log(e.currentTarget);
  console.log(e.target.textContent);
}
