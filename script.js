function button(button) {
  alert("Aur Bhai Kya Haal Chal");
}

let count = 0;
const button = document.getelementbyid("count");

const display = document.getelementbyid("countclick");
button.addEventlistener("click",() => 
  {
    count++;
    display.textContent = count;
  });
