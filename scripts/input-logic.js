import removeRightMostCharacter from "./util/removeRightChar.js";
import checkIfSpanIqualZero from "./util/checkIfSpanIqualZero.js";
import keyupHandle from "./util/handleKeyboardInput.js";

const btns = document.querySelectorAll("button");
const ACbtn = document.getElementById("AC");
const inputSpan = document.querySelector(".input-text");

let filteredBtns = []

const getFilteredButtuns = (array) => {
  btns.forEach(button => {
    if (button.id != "." && button.id != "AC" && button.id != "=") {
      array.push(button);
    }
  });
}

getFilteredButtuns(filteredBtns);

filteredBtns.forEach(button => {
  button.addEventListener("click", function () {
    checkIfSpanIqualZero(inputSpan, button.value);
  });
});

ACbtn.addEventListener("click", function () {
  removeRightMostCharacter(inputSpan);
});

document.addEventListener("keyup", function (event) {
  keyupHandle(event, inputSpan);
});
