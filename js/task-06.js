const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", isInValid);
inputRef.classList.add("validation-input");

function isInValid(evt) {
  if (evt.currentTarget.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add("invalid");
    return;
  }
  inputRef.classList.remove("invalid");
  inputRef.classList.add("valid");
}
