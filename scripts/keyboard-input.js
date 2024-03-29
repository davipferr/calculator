import removeRightMostCharacter from "./util/removeRightChar.js";
import mountExpression from "./calc.js";

const validNumberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const validStringKeys = ['=', '+', '-', '*', '/', "Backspace", "Enter"];
let allValidKeys = validNumberKeys.concat(validStringKeys);

const inputSpan = document.querySelector(".input-text");

const checkIfKeyIsValid = (key) => {
  const isValid = allValidKeys.some(validKey => validKey === key)

  if (!isValid) {
    return false;
  }

  return true;
}

const keysActions = {
  Backspace() {
    console.log("Backspace");
    removeRightMostCharacter(inputSpan);
  },
  Enter() {
    const expression = inputSpan.textContent.replace(/\s/g, "");
    mountExpression(expression);
  },
}

document.addEventListener("keyup", function (event) {

  if (!checkIfKeyIsValid(event.key)) {
    throw new Error("Tecla inválida");
  }

  if (keysActions[event.key]) {
    return keysActions[event.key]();
  }

  inputSpan.textContent += event.key
})