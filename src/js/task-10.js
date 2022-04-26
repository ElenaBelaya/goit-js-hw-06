function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector(`input`),
  btnCreate: document.querySelector(`button[data-create]`),
  btnDestroy: document.querySelector(`button[data-destroy]`),
  boxGeneral: document.querySelector(`#boxes`),
  }
refs.btnCreate.addEventListener(`click`, onCreateBoxes);

refs.btnDestroy.addEventListener(`click`, onDestroyBoxes);

  let boxSize = 30;

function onCreateBoxes() {
  for(let i = 0; i < refs.input.value; i += 1) {
  const boxesArray = [];
  const newBox = document.createElement("div");
  newBox.style.width = `${boxSize +10 * i}px`;
  newBox.style.height = `${boxSize + 10 * i}px`;
  newBox.style.background = getRandomHexColor();
  newBox.style.marginBottom = `10px`;
  boxesArray.push(newBox);
  refs.boxGeneral.append(...boxesArray); 
   
  }
  
};

function onDestroyBoxes(event) {
refs.boxGeneral.innerHTML = "";
refs.input.value = 0;
};

