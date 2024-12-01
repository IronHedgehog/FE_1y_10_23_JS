const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // якщо клас є він його прибирає, якщо класу немає він його додає
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  });

  const lastElementObserver = new IntersectionObserver((entries) => {
    const lastElement = entries[0];
    //   isIntersecting - true(видно) якщо false(не видно)
    if (!lastElement.isIntersecting) return;
    newCards();
    lastElementObserver.unobserve(lastElement.target);
    lastElementObserver.observe(document.querySelector(".card:last-child"));
  });

  lastElementObserver.observe(document.querySelector(".card:last-child"));

  function newCards() {
    for (let i = 0; i < 20; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      observer.observe(card);
      container.append(card);
    }
  }

  cards.forEach((card) => {
    observer.observe(card);
  });
} else {
  console.log("Застарілий браузер");
}
