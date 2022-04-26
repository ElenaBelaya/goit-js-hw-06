function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  body: document.querySelector(`body`),
  colorName: document.querySelector(`.color`),
  btn: document.querySelector(`.change-color`),
};

refs.btn.addEventListener(`click`, onChangeColor);

function onChangeColor(event) {
  refs.body.style.background = getRandomHexColor();
  refs.colorName.textContent = refs.body.style.background;
}
