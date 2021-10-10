const input = document.querySelector(".input");
const output = document.querySelector(".output");
const addBtn = document.querySelector(".add");
const subBtn = document.querySelector(".subtract");

input.addEventListener("input", function () {
  output.innerHTML = input.value;
});

let count = 24;
function increment() {
  output.style.fontSize = `${count}px`;

  count = count + 2;
}
function decrement() {
  output.style.fontSize = `${count}px`;

  count = count - 2;
}

addBtn.addEventListener("click", increment);
subBtn.addEventListener("click", decrement);
