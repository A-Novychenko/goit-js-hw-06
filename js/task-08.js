const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const {email, password} = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені !");

    return;
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
  evt.currentTarget.reset();
}
