import removeRightMostCharacter from "./removeRightChar.js";
import mountExpression from "../calc.js";
import checkIfSpanIqualZero from "./checkIfSpanIqualZero.js";
import removeTextContentSpace from "./removeTextContentSpace.js";

const validNumberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const validStringKeys = ['+', '-', '*', '/', "Backspace", "Enter"];
let allValidKeys = validNumberKeys.concat(validStringKeys);

const checkIfKeyIsValid = (key) => {
  const isValid = allValidKeys.some(validKey => validKey === key)

  if (!isValid) {
    return false;
  }

  return true;
}

const keysActions = {
  Backspace(spanElement) {
    removeRightMostCharacter(spanElement);
  },
  Enter(spanElement) {
    mountExpression(removeTextContentSpace(spanElement.textContent));
  },
}

const keyupHandle = (event, spanElement) => {
  if (!checkIfKeyIsValid(event.key)) {
    return
  }

  if (keysActions[event.key]) {
    return keysActions[event.key](spanElement);
  }

  checkIfSpanIqualZero(spanElement, event.key);
}

export default keyupHandle