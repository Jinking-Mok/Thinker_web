const main = document.querySelector('.js-main'),
  input = document.querySelector('.js-main__input'),
  inputForm = document.querySelector('.js-main__input-form'),
  inputText = document.querySelector('.js-main__input-text'),
  inputBtn = document.querySelector('.js-main__input-btn');

const THINKER = 'thinker';

let thinker = [];

function deletePost(event) {
  const btn = event.target;
  const li = btn.parentNode;
  main.removeChild(li);
  const cleanThinker = thinker.filter(function (thinker) {
    return thinker.id !== parseInt(li.id);
  });
  thinker = cleanThinker;
  saveThinker();
}

function saveThinker() {
  localStorage.setItem(THINKER, JSON.stringify(thinker));
}

function paintPost(text) {
  const newLi = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  const newId = thinker.length + 1;
  delBtn.innerText = 'X';
  delBtn.addEventListener('click', deletePost);
  span.innerText = text;
  newLi.appendChild(span);
  newLi.appendChild(delBtn);
  newLi.id = newId;
  main.appendChild(newLi);
  const thinkerObj = {
    text: text,
    id: newId,
  };
  thinker.push(thinkerObj);
  saveThinker();
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = inputText.value;
  paintPost(inputValue);
  inputText.value = '';
}

function loadThinker() {
  const loadedThinker = localStorage.getItem(THINKER);
  if (loadedThinker !== null) {
    const parsedThinker = JSON.parse(loadedThinker);
    parsedThinker.forEach(function (thinker) {
      paintPost(thinker.text);
    });
  }
}

function init() {
  loadThinker();
  inputForm.addEventListener('submit', handleSubmit);
}
init();
