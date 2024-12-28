const template = document.getElementById('template');

document.addEventListener('DOMContentLoaded', e => {
  const shablon = template.innerHTML.trim();
  console.log(shablon);
  const compileTemplate = Handlebars.compile(shablon);

  const a = compileTemplate({
    userID: 2,
    postId: 3,
    postTitle:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    postBody:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  });

  const b = compileTemplate({
    userID: 1,
    postId: 2,
    postTitle: 'a',
    postBody: 'b',
  });
  // innerHTML - повністю очищує елемент після чого додає контент який ви попросили
  document.body.innerHTML = a;
  document.body.innerHTML = b;
  document.body.insertAdjacentHTML('beforeend', a);
});
