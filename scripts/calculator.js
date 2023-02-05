
// **variables**
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;


// Event listener for buttons
const button = document.querySelectorAll('button');
console.log(button);








// Operation Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(op, a, b) {
  if (op == "+") {
    return add(a, b);
  }
  if (op == "-") {
    return subtract(a, b);
  }
  if (op == "*") {
    return multiply(a, b);
  }
  if (op == "/") {
    return divide(a, b);
  }
}
