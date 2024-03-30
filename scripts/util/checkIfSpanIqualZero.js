import removeTextContentSpace from "./removeTextContentSpace.js";

const checkIfSpanIqualZero = (span, value) => {

  if (!span || !value) {
    throw new Error("span Element ou value inválidos");
  }

  const iqualZero = removeTextContentSpace(span.textContent) === '0';

  if (iqualZero && value !== '0') {
    span.textContent = "";
    span.textContent += value;
  }
  else if (!iqualZero) {
    span.textContent += value;
  }
}

export default checkIfSpanIqualZero