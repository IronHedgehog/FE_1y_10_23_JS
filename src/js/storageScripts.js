export const load = key => {
  try {
    const value = localStorage.getItem(key);
    return value === null ? undefined : JSON.parse(value);
  } catch (error) {
    console.log('Сталася помилка при завантаженні: ', error.message);
  }
};

export const save = (key, value) => {
  try {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
  } catch (error) {
    console.log('Сталася помилка: ', error.message);
  }
};
