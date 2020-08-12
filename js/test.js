var userName = {};

function saveName(text) {
  localStorage.setItem(userName.push(text));
}

function askName() {
  let name = prompt('What is your name?');
  document.querySelector(
    '.js-main__input-text'
  ).placeholder = `Write it down here in your brain, ${name} :)`;
  saveName(name);
}

function init() {
  askName();
}
init();
