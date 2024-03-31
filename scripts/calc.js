import removeTextContentSpace from "./util/removeTextContentSpace.js";

const isEqualBtn = document.getElementById("=");
const inputSpan = document.querySelector(".input-text");
const resultSpan = document.querySelector(".result-span");

isEqualBtn.addEventListener("click", function () {
  mountExpression(removeTextContentSpace(inputSpan.textContent));
});

const operationType = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
}

const operationLogic = {
  '+': function (x, y) {
    return  x + y;
  },
  '-': function (x, y) {
    return  x - y;
  },
  '*': function (x, y) {
    return  x * y;
  },
  '/': function (x, y) {
    return  x / y;
  },
}

const setResultSpan = (expression, result) => {
  resultSpan.textContent = `${expression} = ${result}`;
}

const makeOperation = (x, y, oper, expression) => {
  const result = operationLogic[oper](x, y);

  setResultSpan(expression, result);
}

const getOperationType = (expression) => {
  for (let i = 0; i < expression.length; i++) {
    if (operationType[expression[i]]) {
      return expression[i];
    }
  }
}

const mountExpression = (expression) => {
  const oper = getOperationType(expression);
  const operands = expression.split(`${oper}`);

  const x = parseFloat(operands[0]);
  const y = parseFloat(operands[1]);

  if (oper && operands) {
    makeOperation(x, y, oper, expression);
  }
}

export default mountExpression