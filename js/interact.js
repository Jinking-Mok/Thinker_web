const form = document.querySelector('.js-form'),
  getText = form.querySelector('.js-input-text'),
  btn = form.querySelector('.js-input-btn'),
  post = document.querySelector('.main__thinks');

function write() {
  console.log(getText.value);
  localStorage.setItem('memo', getText.value);
  const newPost = document.createElement('span');
  const newContent = document.createTextNode(getText.value);
  newPost.appendChild(newContent);
}

function init() {
  btn.addEventListener('click', write);
}
init();
