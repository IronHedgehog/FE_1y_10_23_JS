document.addEventListener("DOMContentLoaded", () => {
  const imgs = Array.from(document.querySelectorAll(".img"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entryArr) => {
        entryArr.forEach((entry) => {
          // isIntersecting - людина бачить цей елемент
          if (entry.isIntersecting === true) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      },
      {
        //   root:,
        rootMargin: "50px",
        // threshold:,
      }
    );

    imgs.forEach((img) => {
      observer.observe(img);
    });
  } else {
    console.log(
      "Ліниве відображення не підтримується бо у вас стара версія браузера"
    );
  }
});
