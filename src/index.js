const makePromise = (delay, text) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10 + 1) < 5) {
        res(text);
      } else {
        rej(text);
      }
    }, delay);
  });
};

const promiseA = makePromise(1000, 'promiseA');
const promiseB = makePromise(2000, 'promiseB');
const promiseC = makePromise(3000, 'promiseC');
const promiseD = makePromise(4000, 'promiseD');

Promise.all([promiseA, promiseB, promiseC, promiseD])
  .then(value => console.log(value))
  .catch(error => {
    console.log('Нас зареджектило');
  })
  .finally(() => {
    console.log('PROMISE.ALL завершив виконання');
  });

Promise.race([promiseA, promiseB, promiseC, promiseD])
  .then(value => console.log(value))
  .catch(error => {
    console.log('Нас зареджектило :', error);
  })
  .finally(() => {
    console.log('PROMISE.RACE завершив виконання');
  });

Promise.any([promiseA, promiseB, promiseC, promiseD])
  .then(value => console.log(value))
  .catch(error => {
    console.log('Нас зареджектило :', error.message);
  })
  .finally(() => {
    console.log('PROMISE.ANY завершив виконання');
  });

new Promise(resolve => resolve('Успіх')).then(value => {
  console.log(value);
});

Promise.resolve('Успіх').then(value => console.log(value));

new Promise(rejected => rejected('Не успіх')).catch(value => {
  console.log(value);
});

Promise.reject('Не успіх').catch(value => console.log(value));
