const refs = {
    btnDecrement: document.querySelector(`button[data-action="decrement"]`),
    btnIncrement: document.querySelector(`button[data-action="increment"]`),
    valueEl: document.querySelector(`#value`),
    
};

let counterValue = 0;

refs.btnDecrement.addEventListener(`click`, onDecrementCounter);

 function onDecrementCounter(event) {
  counterValue -=1;
  refs.valueEl.textContent = counterValue;
 };

 refs.btnIncrement.addEventListener(`click`, onIncrementCounter);

 function onIncrementCounter(event) {
    counterValue +=1;
    refs.valueEl.textContent = counterValue;
 }