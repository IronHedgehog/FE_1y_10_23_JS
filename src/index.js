let seconds = 0;

// setInterval(() => {
//   seconds++;

//   console.log(seconds);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);

//   console.log('minutes : ', minutes);
//   console.log('hours : ', hours);
// }, 100);

let timer;
function startTimer() {
  timer = setInterval(function () {
    seconds++;
    document.getElementById('timer').innerText = new Date()
      .toISOString()
      .substr(11, 8);
  }, 1000);
}

const input = document.getElementById('input');
const button = document.getElementById('stop');
const buttonStart = document.getElementById('start');

input.addEventListener('input', _.debounce(onInput, 250));

function onInput(e) {
  const inputValue = Number(e.target.value);
  if (Number.isNaN(inputValue)) return;
  let counter = inputValue;
  let timer;

  timer = setInterval(() => {
    counter--;
    console.log(counter);

    if (counter === 10) {
      document.body.style.backgroundColor = 'black';
    }
    if (counter === 0 || inputValue === 0 || inputValue === null) {
      clearInterval(timer);
    }
  }, 1000);
  button.addEventListener('click', onClick);
  buttonStart.addEventListener('click', onStartClick);
  function onClick(e) {
    clearInterval(timer);
  }

  function onStartClick(e) {
    timer = setInterval(() => {
      counter--;
      console.log(counter);

      if (counter === 0 || inputValue === 0 || inputValue === null) {
        clearInterval(timer);
      }
    }, 1000);
  }
}
