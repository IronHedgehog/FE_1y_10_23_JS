import axios from 'axios';

async function fetchPosts() {
  const { data } = await axios.get('http://localhost:3000/posts');
  createHtml(data);
}

function createHtml(data) {
  const markup =
    data &&
    data
      .map(post => {
        return `<h1>${post.email}</h1>
        <h2>${post.name}</h2>
    <button class="deleteButton" id=${post.id}>ВИДАЛИТИ</button>
    <button class="updateButton" id=${post.id}>ОНОВИТИ</button>
    `;
      })
      .join(' ');
  document.body.innerHTML = markup;
}

fetchPosts();

async function createUser() {
  const user = {
    nickname: 'qwe',
    email: 'qwe@gmail.com',
    password: 'QWERTY12345@',
  };

  const { data } = await axios.post('http://localhost:3000/posts', user);
  console.log(data);
}

async function deleteUser(id) {
  await axios.delete(`http://localhost:3000/posts/${id}`);

  await fetchPosts();
}

document.body.addEventListener('click', onClick);

async function onClick(e) {
  if (!e.target.classList.contains('updateButton')) return;
  const idForUpdate = e.target.id;
  updateUserEmail(idForUpdate);
  // console.log(e.target);
  // e.target; - елемент на якому відбулась подія
  if (!e.target.classList.contains('deleteButton')) return;
  const idForDelete = e.target.id;
  await deleteUser(idForDelete);
}

// createUser();

async function updateUser(id) {
  const obj = {
    name: 'Petro',
  };
  // PUT - Дропає весь обʼєкт,додає замість обʼєкт який ви попросили
  const { data } = await axios.put(`http://localhost:3000/posts/${id}`, obj);
  console.log(data);
  fetchPosts();
}

async function updateUserEmail(id) {
  const obj = {
    asd: 'Petro@gmail.com',
  };
  // PUT - Дропає весь обʼєкт,додає замість обʼєкт який ви попросили
  const { data } = await axios.patch(`http://localhost:3000/posts/${id}`, obj);
  console.log(data);
  fetchPosts();
}
