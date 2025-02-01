const promise = new Promise(executor);

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.floor(Math.random() * 10 + 1) > 5) {
//       resolve('Успіх');
//       console.log('Успіх');
//     } else {
//       reject('Не успіх');
//     }
//   }, 1000);
// });

let res = 0;
let rej = 0;

function executor(resolve, reject) {
  setTimeout(() => {
    if (Math.floor(Math.random() * 10 + 1) > 5) {
      resolve('Успіх');
      res++;
      console.log('Успіх');
      console.log(promise);
      // console.log(promise1);
    } else {
      reject('Не успіх');
      rej++;
      console.log(promise);
      // console.log(promise1);
    }
  }, 1000);
}

console.log(promise);
// console.log(promise1);
// then - тригериться коли проміс змінює стан
// параметром приймає результат промісу
// Метод then на практиці відпрацьовує тільки успішні випадки
promise
  .then(
    fulfilledValue => {
      console.log('Успішне виконання промісу', fulfilledValue);
    }
    // error => {
    //   console.log('Не успішне виконання', error);
    // }
  )
  //  .catch - спеціально створений метод для опрацювання помилок
  .catch(error => {
    console.log('Catch: ', error);
  })
  // finally - зберігає код який має відпрацювати у будь-якому разі
  .finally(() => {
    console.log('res : ', res);
    console.log('rej : ', rej);
    console.log('final task');
  });
