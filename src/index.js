// // fetch - інструмент для запитів на сервер який їде з коробки JS

// // fetch - приймає два параметри

// // Параметр 1-й: шлях за яким ви хочете отримати або зберегти дані(ЗБЕРІГАЄТЬСЯ В ДОКУМЕНТАЦІЇ БЕКЕНДУ)

// // Параметр 2-й: обʼєкт налаштувань, (у нього ми вказуємо метод, тіло - дані які ми хочемо зберігти або змінити, заголовки - ключ реєстрації, формат даних які ви відправляєте)

// // для отримання даних вам необхідний тільки один параметр(шлях)

// // МЕТОД FETCH - завжди повертає проміс

// const object1 = {
//   name: 'Petro',
// };

// const updateObject1 = {
//   ...object1,
//   age: 150,
//   avatar: 'avatar',
//   lastNAme: 'Petro',
// };

// fetch('https://67b1add23fc4eef538ea6090.mockapi.io/posts', {
//   method: 'POST',
//   body: JSON.stringify(object1),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   // Обробка даних
//   .then(response => response.json())
//   //дані
//   .then(json => printObject(json));

// function printObject(object) {
//   console.log(object);
// }

// fetch('https://67b1add23fc4eef538ea6090.mockapi.io/posts/56', {
//   method: 'PUT',
//   body: JSON.stringify(updateObject1),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// fetch('https://67b1add23fc4eef538ea6090.mockapi.io/posts/56', {
//   method: 'DELETE',
// });
