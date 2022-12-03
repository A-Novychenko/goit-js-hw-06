const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
outputRef.textContent = "Anonymous";

inputRef.addEventListener("input", coulDontThinkOfName);

function coulDontThinkOfName(evt) {
  outputRef.textContent =
    inputRef.value !== "" ? evt.currentTarget.value : "Anonymous";
}
