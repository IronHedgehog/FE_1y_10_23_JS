// console.log('first');

// setTimeout - 2 частини
// () => {console.log('second');} - колбек, який виконається після вказаного у другому параметрі часу
// 2-й параметр: час очікування (завжди вказується у мілісекундах)
// у одній секунді - 1000мс
// const clock = setTimeout(() => {
//   console.log('second');
// }, 0);

// console.log('third');

// function welcome() {
//   console.log('Welcome');
// }

// console.log(clock);
// clearTimeout(clock);

// clock(welcome, 300);

// console.log('third');

// let counter = 0;

// const interval = setInterval(() => {
//   counter += 1;
//   console.log(counter);
//   if (counter === 5) {
//     clearInterval(interval);
//   }
// }, 1000);

// console.log('interval: ', interval);

// --------------------- 2 - частина

const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
const timeInput = document.getElementById('time');
const timeLeft = document.getElementById('timeLeft');
const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let time = Number(e.currentTarget.elements.time.value);

  const buttonStop = e.currentTarget.elements.stop;

  let counter = time;
  const timer = setInterval(() => {
    counter -= 1;
    timeLeft.textContent = counter;
    console.log(counter);
    if (counter === 0) {
      timeLeft.textContent = 'Таймер завершився';
      clearInterval(timer);
    }
  }, 1000);
  // FIXME: видалити слухач подій
  buttonStop.addEventListener('click', () => {
    clearInterval(timer);
    counter = Number(timeLeft.textContent);
    form.elements.time.value = counter;
  });
}
