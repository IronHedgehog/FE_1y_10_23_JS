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

// Промісіфікація - (функція буде повертати проміс)

function sum(a, b) {
  return a + b;
}

function getSum(a, b) {
  return new Promise((res, rej) => {
    if (a && b) {
      res(a + b);
    } else {
      rej('Не вистачає даних або не число');
    }
  });
}

console.log(sum(5, 5));

console.log(getSum(10, 5).then(value => console.log(value)));

// const fetchDataFromServer = (user, success, error) => {
//   console.log(`fetch data for ${user}`);

//   if (Math.floor(Math.random() * 10 + 1) > 5) {
//     success('Успіх');
//   } else {
//     error('Не успіх');
//   }
// };

// const fetchSuccess = user => {
//   console.log(user);
// };

// const fetchError = user => {
//   console.log(`${user} завантажити дані не вдалось`);
// };

// console.log(fetchDataFromServer('User', fetchSuccess, fetchError));

const fetchDataFromServer = user => {
  return new Promise((res, rej) => {
    console.log(`fetch data for ${user}`);
    setTimeout(() => {
      if (Math.floor(Math.random() * 10 + 1) > 5) {
        res('Успіх');
      } else {
        rej('Не успіх');
      }
    }, 2000);
  });
};

fetchDataFromServer('user')
  .then(value => {
    console.log(`Отримали дані з сервера для юзера ${value}`);
  })
  .catch(error => console.log('Робимо повторний запит'));
