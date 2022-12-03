function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", handleCreateBox);
destroyBtn.addEventListener("click", handleDestroyBox);

function handleCreateBox(e) {
  let amount = inputRef.value;

  createBoxes(amount);
  inputRef.value = "";
}

const createBoxes = (amount) => {
  let addMarkup = "";
  let size = -10;

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    addMarkup += `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + size
    }px; height: ${30 + size}px "></div>`;
  }

  boxesRef.insertAdjacentHTML("beforeend", addMarkup);
};

function handleDestroyBox() {
  boxesRef.innerHTML = "";
}
