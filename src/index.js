import { getPosts } from './API/API';

const section = document.querySelector('#render');
const LOAD_MORE_BUTTON = document.getElementById('load');

let page = 1;

async function makeHTML(page) {
  const data = await getPosts(page);

  console.log(data);
  const html =
    data &&
    data
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
  section.innerHTML = html;
}

console.log(makeHTML());

LOAD_MORE_BUTTON.addEventListener('click', async () => {
  page++;
  await makeHTML(page);
});
