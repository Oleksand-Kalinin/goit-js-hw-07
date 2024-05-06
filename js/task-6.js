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
  // console.log(amount);
  const countBoxes = Number(amount);
  const divBox = document.createElement('div');
  divBox.style.width = '30px';
  divBox.style.height = '30px';

  for (let i = 1; i <= countBoxes; i++) {
    divBox.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divBox);
    // divBox.style.width = '30px';
    // divBox.style.height = '30px';
  }
  numberInput.value = '';
}


function destroyBoxes() {
  divBoxes.innerHTML = '';
}