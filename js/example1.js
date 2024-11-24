const input = document.querySelector(".input");

// lodash = _

// console.log(_.add(2, 2));

// const add = _.add(6, 4);
// console.log(add);

input.addEventListener("input", onInput);

let counter = 0;

function onInput(e) {
  counter++;

  //   console.log(e.target.value);
  console.log("counter " + counter);
}

//  throttle - затримка виконання

// Приймає ддва параметри функція яку треба затримати.

// час на який треба затримувати

input.addEventListener("input", _.throttle(onThrottledInput, 300));

let throttledCounter = 0;

function onThrottledInput(e) {
  throttledCounter++;
  console.log(e.target.value);
  console.log("throttledCounter " + throttledCounter);
}
