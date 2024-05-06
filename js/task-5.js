const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', (event) => {
  const body = document.querySelector('body');
  const colorName = document.querySelector('.color');
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
  changeColorBtn.blur();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
