function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxEl = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');





inputEl.addEventListener('click', handleInputClick)
let inputElValue = 0;
function handleInputClick(event) {
  inputElValue = event.currentTarget.value;
}



function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let divWidth = 30;
  let divHeight = 30;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');

    divEl.style.width = `${divWidth}px`;
    divEl.style.height = `${divHeight}px`;

    divEl.style.backgroundColor = getRandomHexColor();;
    fragment.appendChild(divEl);
    divWidth += 10;
    divHeight += 10;
  }

  boxEl.appendChild(fragment);
}


createBtn.addEventListener('click', handleCreateBtnClick)

function handleCreateBtnClick() {

  createBoxes(inputElValue);
}

destroyBtn.addEventListener('click', handleDestroyBtnClick)

function handleDestroyBtnClick() {
  boxEl.innerHTML = "";
}




// for (const ingredient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//   liEl.classList.add('item');
//   fragment.appendChild(liEl);
// }

// ingredientEl.appendChild(fragment);