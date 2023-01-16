const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.getElementById("ingredients");

const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  fragment.appendChild(liEl);
}

ingredientEl.appendChild(fragment);