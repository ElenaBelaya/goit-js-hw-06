const refs = {
  inputEl: document.querySelector(`#validation-input`),  
}

refs.inputEl.addEventListener(`blur`, onCheckInput);

 function onCheckInput(event) {
    
  if(refs.inputEl.value.length == refs.inputEl.dataset.length) {
      
         refs.inputEl.classList.add("valid");
         refs.inputEl.classList.remove("invalid")
     } else {
        refs.inputEl.classList.add("invalid");
        refs.inputEl.classList.remove("valid")
     }
    
 };


 
     