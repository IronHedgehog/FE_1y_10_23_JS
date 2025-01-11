console.log('first');

// setTimeout - 2 частини
// () => {console.log('second');} - колбек, який виконається після вказаного у другому параметрі часу
// 2-й параметр: час очікування (завжди вказується у мілісекундах)
// у одній секунді - 1000мс
const clock = setTimeout(() => {
  console.log('second');
}, 0);

function welcome() {
  console.log('Welcome');
}

console.log(clock);

// clock(welcome, 300);

console.log('third');

let counter = 0;

const interval = setInterval(() => {
  counter += 1;
  console.log(counter);
  if (counter === 5) {
    clearInterval(interval);
  }
}, 1000);



console.log('interval: ', interval);
