let buttonTheme = document.getElementById('switch');
let button = document.getElementById('theme-color');

button.textContent = 'Dark Mode';

function toggleMode() {
  let html = document.documentElement
  html.classList.toggle('light');

  let moonStars = buttonTheme.querySelector('.moon-stars')
  moonStars.classList.toggle('hide');

  let sun = buttonTheme.querySelector('.sun');
  sun.classList.toggle('hide');

  if(button.textContent == 'Dark Mode') {
    button.textContent = 'Light Mode';
  } else {
    button.textContent = 'Dark Mode';
  }
}