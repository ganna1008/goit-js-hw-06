let counterValue = 0;
const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const counterValueEl = document.getElementById('value')


decreaseBtn.addEventListener('click', handleDecreaseBtnClick);
increaseBtn.addEventListener('click', handleIncreaseBtnClick);

function handleDecreaseBtnClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

function handleIncreaseBtnClick() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}


