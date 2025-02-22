import axios from 'axios';

export const takeUsers = async () => {
  const { data } = await axios(
    'https://67b99a8651192bd378dde12d.mockapi.io/users'
  );

  return data;
};
