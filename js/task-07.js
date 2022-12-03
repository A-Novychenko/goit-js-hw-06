const sliderRef = document.querySelector("#font-size-control");
const sampleRef = document.querySelector("#text");

sliderRef.addEventListener("input", chengeSize);

function chengeSize(evt) {
  sampleRef.style = `font-size: ${evt.currentTarget.value}px`;
}
