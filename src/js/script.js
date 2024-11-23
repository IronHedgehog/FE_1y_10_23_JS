document.addEventListener('scroll', onScroll);

const vanila = document.querySelector('.output.vanilla');
let counter = 0;
function onScroll(e) {
  counter++;
  vanila.textContent = counter;
}
