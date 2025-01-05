const user = {
  name: 'Petro',
  email: 'Asd@asd.com',
  password: 'QWERTY12345',
  confirmPassword: true,
};

console.log(user);
const stringifyData = JSON.stringify(user);

// console.log(stringifyData);

console.log(stringifyData);

const string = typeof stringifyData;
console.log(string);

const obj = JSON.parse(stringifyData);

console.log(obj);
