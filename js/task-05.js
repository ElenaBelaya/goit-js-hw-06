const refs = {
    inputEl: document.querySelector(`#name-input`),
    userName: document.querySelector(`#name-output`),
};

refs.inputEl.addEventListener(`input`, addUserName);
    
function addUserName(event) {
  
 if(event.currentTarget.value === "") {
    refs.userName.textContent = "Anonymous";
 } else {
    refs.userName.textContent = event.currentTarget.value;
 };
     
};