let count = 0;
const button = document.getElementById("count");
const display = document.getElementById("countclick");
button.addEventListener("click", () => {
  count++;
  display.textContent = count;
})
