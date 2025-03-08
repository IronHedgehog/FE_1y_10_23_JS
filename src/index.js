import axios from 'axios';

async function fetchPosts() {
  const { data } = await axios.get('http://localhost:3000/posts');
  console.log(data);
}

// fetchPosts();

async function createUser() {
  const user = {
    nickname: 'qwe',
    email: 'qwe@gmail.com',
    password: 'QWERTY12345@',
  };

  const { data } = await axios.post('http://localhost:3000/posts', user);
  console.log(data);
}

createUser();
