const vanilla = document.querySelector(".output.vanilla");
const throttled = document.querySelector(".output.throttled");
const debounce = document.querySelector(".output.debounced");

let counter = {
  vanilla: 0,
  throttled: 0,
  debounce: 0,
};

document.addEventListener("scroll", onScroll);

function onScroll(e) {
  counter.vanilla += 1;
  vanilla.textContent = counter.vanilla;
}

document.addEventListener("scroll", _.throttle(onScrollThrottled, 300));

function onScrollThrottled(e) {
  counter.throttled += 1;
  throttled.textContent = counter.throttled;
}

// debounce - відпрацьовую коли подія перестає виконуватись і після цього дебаун чекає 300ms -час який ми вказали для затримки
// За замовчуванням debouce - trailing
document.addEventListener(
  "scroll",
  _.debounce(onScrollDebounced, 3000, {
    trailing: true,
    leading: false,
    maxWait: 3000,
  })
);

function onScrollDebounced(e) {
  counter.debounce += 1;
  debounce.textContent = counter.debounce;
}
