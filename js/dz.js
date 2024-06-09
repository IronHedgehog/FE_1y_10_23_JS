// const pictura = document.querySelector([(alt = "AVA")]);
// const pictura = document.querySelector("[alt=img]");
// console.log(pictura);
// наступний код не працює
// const pictura = document.querySelector(".s3avd");
// console.log(pictura);
// pictura.alt = "Novyi alt";
// а цей працює
// document.getElementById("3savd").alt = "newAlternateText";
// 4-е завдання
// не виходить
const ulElement = document.querySelector(".ulka");
// alert(ulElement.childNodes);
ulElement.childNodes[0].textContent = "Працьовита Бджілка";
// ulElement.parentNode - повератє батьківський елемент
console.log(ulElement.parentNode);
// children - повертає дитячі елементи
console.log(ulElement.children);
// Поверне перший дитячий елемент
console.log(ulElement.firstElementChild);
// Поверне останній дитячий елемент
console.log(ulElement.lastElementChild);
// Поверне наступний сусідній елемент
console.log(ulElement.nextElementSibling);
// Поверне попередній сусідній елемент
console.log(ulElement.previousElementSibling);
// ulElement.classList.contains("ulka") - чи має  classList ulElementа  клас ulka?
// contains - завжди повертає boolean ( true або false)
console.log(ulElement.classList.contains("ulka"));

console.log(ulElement.classList.replace("ulka", "li"));

// EVENTS
// console.log(ulElement.classList.toggle("ulka"));
