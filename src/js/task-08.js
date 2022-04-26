const refs = {
    form: document.querySelector(`.login-form`),
    emailInputEl: document.querySelector(`input[type="email"]`),
    passwordInputEl: document.querySelector(`input[type="password"]`),
    button: document.querySelector(`button[type="submit"]`),
};

refs.form.addEventListener(`submit`, onCreateForm);

function onCreateForm(event) {
    event.preventDefault();
  if(refs.emailInputEl.value === "" || refs.passwordInputEl.value === "") {
      alert("Please fill in all the fields!")
  } else {
      const newForm = {
     email: event.currentTarget.elements.email.value,
     password: event.currentTarget.elements.password.value,
      };
      console.log(newForm);
      event.currentTarget.reset();
      }

  };
  
