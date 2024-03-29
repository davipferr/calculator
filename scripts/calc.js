const resultBtn = document.getElementById("=");
const inputSpan = document.querySelector(".input-text");
const resultSpan = document.querySelector(".result-span");

resultBtn.addEventListener("click", function () {
  const expression = inputSpan.textContent.replace(/\s/g, "");

  mountExpression(expression);
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
      return operationType[expression[i]];
    }
  }
}

const mountExpression = (expression) => {
  const oper = getOperationType(expression);
  const operands = expression.split(`${oper}`);

  const x = parseFloat(operands[0]);
  const y = parseFloat(operands[1]);

  makeOperation(x, y, oper, expression);
}

export default mountExpression