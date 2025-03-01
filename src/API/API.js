import axios from 'axios';

export const getPosts = async (page = 1) => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
    );

    return data;
  } catch (error) {
    throw new Error('Typical....');
  }
};
