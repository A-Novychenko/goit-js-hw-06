function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", handleclickChangeColor);

function handleclickChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}
