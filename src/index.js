import { deleteUser, takeFlowers, takeUsers } from './API/users';

// async await - async - робить вашу функцію асинхроною
//await - почекати виконання
// try catch - try  - спробувати виконати код всередині блоку якщо не вийщло передати управлдіння у блок catch
// catch - ловить помилки та відпрацьовує їх

const makeMarkUp = async evt => {
  try {
    const users = await takeUsers();

    const markUp = users
      .map(({ id, email, nickname, password }) => {
        return `
        <h1>Email:${email}</h1>
      <h1> Nickname:${nickname}</h1>
     <h1> password:${password}</h1>
     <button id="${id}" class="deleteButton">DELETE</button>
      `;
      })
      .join('');

    document.body.insertAdjacentHTML('beforeend', markUp);
  } catch (error) {
    console.log(error.message);
  }
};

document.body.addEventListener('click', deleteClick);

async function deleteClick(evt) {
  if (!evt.target.classList.contains('deleteButton')) return;
  const deleteElementId = evt.target.id;
  await deleteUser(deleteElementId);
  document.body.innerHTML = '';
  makeMarkUp();
}

document.addEventListener('DOMContentLoaded', makeMarkUp);

takeFlowers();
