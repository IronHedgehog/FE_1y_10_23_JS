import { takeUsers } from './API/users';

// async await - async - робить вашу функцію асинхроною
//await - почекати виконання
// try catch - try  - спробувати виконати код всередині блоку якщо не вийщло передати управлдіння у блок catch
// catch - ловить помилки та відпрацьовує їх

const makeMarkUp = async evt => {
  try {
    const users = await takeUsers();

    const markUp = users
      .map(({ email, nickname, password }) => {
        return ` <h1>Email:${email}</h1>
      <h1> Nickname:${nickname}</h1>
     <h1> password:${password}</h1>
     <button>DELETE</button>
      `;
      })
      .join('');

    document.body.insertAdjacentHTML('beforeend', markUp);
  } catch (error) {
    console.log(error.message);
  }
};

document.addEventListener('DOMContentLoaded', makeMarkUp);
