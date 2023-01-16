const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', handleInputChange);



function handleInputChange(event) {
    if (!event.currentTarget.value) {
        output.textContent = "Anonymous";
        return;
    }
    output.textContent = event.currentTarget.value.trim();
};

