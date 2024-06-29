//   The issue in your code is related to the logic of the if and else if statements. The conditions are being checked in a way that once a condition is true, it will execute the corresponding block and skip the rest. This causes incorrect evaluations. Specifically, the problem lies in the ordering of the else if statements. Let's correct this:
// Fix the order of conditions: Ensure that the age ranges do not overlap incorrectly. For instance, the current order means that an age of 15 will be evaluated as a child because it only checks if age > 0 before it checks if age > 13.
// if (ageValue > 0) {
//   text8.textContent("Ти дитина");
// } else if (ageValue > 13) {
//   text8.textContent("Ти підліток");
// } else if (ageValue > 20) {
//   text8.textContent("Ти дорослий");
// } else if (ageValue > 65) {
//   text8.textContent("Йой, ти вже пенсіонер");
// } else {
//   text8.textContent("Щось пішло не за планом");
// }

//

// Вибір способу оплати (switch case та тернарний оператор):
// Напишіть функцію, яка приймає спосіб оплати(готівка, кредитна картка, PayPal) і суму.Поверніть повідомлення про комісію: 0 % для готівки, 2 % для кредитної картки, 3 % для PayPal.
// Використайте switch case для вибору способу оплати та тернарний оператор для визначення, чи потрібно додавати слово "комісія" до відповіді.
