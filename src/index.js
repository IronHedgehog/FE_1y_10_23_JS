import { getPosts } from './API/API';
import { load, save } from './js/storageScripts';

const section = document.querySelector('#render');
const LOAD_MORE_BUTTON = document.getElementById('load');
const form = document.getElementById('searchForm');

const Q_VALUE = 'qValue';

let page = 1;

async function makeHTML(q, page) {
  const data = await getPosts(q, page);

  const html = data
    .map(({ id, body, email, name }) => {
      return `
      <div id="${id}">
   <p>${body}</p>
   <p>${email}</p>
    <p>${name}</p>
    </div>
      `;
    })
    .join('');
  section.insertAdjacentHTML('beforeend', html);
}

// document.addEventListener('DOMContentLoaded', async e => {
//   await makeHTML();
// });

LOAD_MORE_BUTTON.addEventListener('click', async e => {
  page++;
  const value = load(Q_VALUE);
  await makeHTML(value, page);
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  const qValue = e.currentTarget.elements.searchInput.value;

  save(Q_VALUE, qValue);

  section.innerHTML = '';
  await makeHTML(qValue, 1);

  form.reset();

  page++;
  if (page > 1) {
    LOAD_MORE_BUTTON.style.display = 'block';
  }
});
