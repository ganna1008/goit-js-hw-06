function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnChangeColor.addEventListener('click', handleChangeColor);

function handleChangeColor() {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  textColorEl.textContent = randomColor;
}