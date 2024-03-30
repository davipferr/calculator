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
  let opers = []
  for (let i = 0; i < expression.length; i++) {
    if (operationType[expression[i]]) {
      console.log(expression[i]);
      opers.push(expression[i]);
    }
  }

  return opers;
}

const splitExpression = (opers, expression) => {
  let exp = [expression];
  let operands = [];

  opers.forEach(oper => {
    operands = [];

    exp.forEach(operand => {
      operands = operands.concat(operand.split(oper));
    });

    exp = operands;
  });

  return operands;
}

const mountExpression = (expression) => {
  const opers = getOperationType(expression);

  const operands = splitExpression(opers, expression);

/*   if (opers && operands) {
    makeOperation(opers, operands);
  } */
}

export default mountExpression