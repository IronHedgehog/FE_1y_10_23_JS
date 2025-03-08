import axios from 'axios';

export const getPosts = async (q = 'car', page = 1) => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10&q=${q}`
    );
    if (data.length === 0) {
      throw new Error('Інформації немає');
    }
    return data;
  } catch (error) {
    throw new Error('За вашим запитом даних немає');
  }
};

// GET https://pixabay.com/api?key=""&q="car"&page=1&per_page=50
