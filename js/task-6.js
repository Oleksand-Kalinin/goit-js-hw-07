const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');


createBtn.addEventListener('click', () => {
  numberInput.value >= 1 && numberInput.value <= 100 ? createBoxes(numberInput.value) : alert('Enter a number from 1 to 100');
});


destroyBtn.addEventListener('click', destroyBoxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {

  const countBoxes = Number(amount);

  for (let i = 1, width = 30, height = 30; i <= countBoxes; i++, width += 10, height += 10) {
    const divBox = document.createElement('div');
    divBox.style.width = `${width}px`;
    divBox.style.height = `${height}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divBox);
  }
  numberInput.value = '';
}


function destroyBoxes() {
  divBoxes.innerHTML = '';
}