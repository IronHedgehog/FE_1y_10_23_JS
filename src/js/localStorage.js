// 1) localStorage
const LOCAL_STORAGE_INPUT_TEXT = 'input';
const object = {
  a: 'b',
};
// localStorage.getItem();
localStorage.setItem(LOCAL_STORAGE_INPUT_TEXT, JSON.stringify(object));

console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_INPUT_TEXT)));
console.log(localStorage.length);
localStorage.removeItem(LOCAL_STORAGE_INPUT_TEXT);
localStorage.clear();
