import removeRightMostCharacter from "./util/removeRightChar.js";

const btns = document.querySelectorAll("button");
const ACbtn = document.getElementById("AC");
const inputSpan = document.querySelector(".input-text");

let filteredBtns = []

btns.forEach(button => {
  if (button.id != "." && button.id != "AC") {
    filteredBtns.push(button);
  }
});

filteredBtns.forEach(button => {
  button.addEventListener("click", function () {
    inputSpan.textContent += button.value;
  });
});

ACbtn.addEventListener("click", function () {
  removeRightMostCharacter(inputSpan);
});
