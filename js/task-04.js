let counterValue = 0;

const decrСounterValueRef = document.querySelector('[data-action="decrement"]');
const incrСounterValueRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

const decreaser = decrСounterValueRef.addEventListener("click", decr);
const enlarger = incrСounterValueRef.addEventListener("click", incr);

function decr() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function incr() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
