import removeTextContentSpace from "./removeTextContentSpace.js";

const removeRightMostCharacter = (element) => {

  if (!element) {
    throw new Error("Elemento inválido");
  }

  let text = removeTextContentSpace(element.textContent);

  if (text.length > 0) {
    text = text.slice(0, -1);

    element.textContent = text;
  }
}

export default removeRightMostCharacter