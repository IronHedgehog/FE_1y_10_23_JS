const vanilla = document.querySelector(".output.vanilla");
const throttled = document.querySelector(".output.throttled");

let counter = {
  vanilla: 0,
  throttled: 0,
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
