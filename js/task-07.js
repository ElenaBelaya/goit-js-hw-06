const refs = {
    inputSizeControlEl: document.querySelector(`#font-size-control`),
    text: document.querySelector(`#text`),
    
};

refs.inputSizeControlEl.addEventListener(`click`, onSizeAmount);



function onSizeAmount(event) {
    refs.text.style.fontSize = event.currentTarget.value + "px";
    
    
    
   
}