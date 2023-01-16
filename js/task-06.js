const input = document.getElementById('validation-input');

console.log('input-data', input.dataset.length);
console.log(typeof Number(input.dataset.length))

input.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
    if (event.currentTarget.value.trim().length === 0) {
        input.classList.remove('valid');
        input.classList.remove('invalid');
        return;
    }
    if (event.currentTarget.value.trim().length === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    }
    input.classList.add('invalid');
    input.classList.remove('valid');
}

