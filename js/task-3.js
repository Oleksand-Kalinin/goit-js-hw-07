const userNameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
userNameInput.addEventListener('input', (event) => {
    if (event.currentTarget.value.trim() !== '') {
        output.textContent = event.currentTarget.value.trim();
    } else {
        output.textContent = 'Anonymous';
    }
});