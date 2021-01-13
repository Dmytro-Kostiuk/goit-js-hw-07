const btnDecrRef = document.querySelector('button[data-action="decrement"]');
const btnIncrRef = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector("span#value");
let counterValue = Number(spanRef.textContent);
btnDecrRef.addEventListener("click", () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
});
btnIncrRef.addEventListener("click", () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
});
