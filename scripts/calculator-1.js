// **variables**
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let currentOperation = null;

const button = document.querySelectorAll('button');

function populateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue;
}

function buttonClick() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      if (button[i].classList.contains('operand')) {
        displayValue = displayValue === "0" ? button[i].value : displayValue + button[i].value;
        populateDisplay();
        if (firstOperator === null) {
          firstNumber = displayValue;
        } else {
          secondNumber = displayValue;
        }
      }
      if (button[i].classList.contains('operator')) {
        if (secondOperator !== null) {
          let num1 = parseFloat(firstNumber);
          let num2 = parseFloat(secondNumber);
          let result = operate(firstOperator, num1, num2);
          if (!isNaN(result)) {
            firstNumber = result.toString();
            displayValue = firstNumber;
            populateDisplay();
            secondNumber = null;
            secondOperator = null;
            currentOperation = button[i].value;
            firstOperator = currentOperation;
          }
        } else if (firstOperator !== null && secondOperator === null) {
          secondOperator = button[i].value;
          currentOperation = secondOperator;
        } else {
          firstOperator = button[i].value;
          currentOperation = firstOperator;
        }
      }
    })
  }
}

function getOperator() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      if (button[i].classList.contains('operator')) {
        if (secondOperator !== null) {
          let num1 = parseFloat(firstNumber);
          let num2 = parseFloat(secondNumber);
          let result = operate(firstOperator, num1, num2);
          if (!isNaN(result)) {
            firstNumber = result.toString();
            displayValue = firstNumber;
            populateDisplay();
            secondNumber = null;
            secondOperator = null;
            currentOperation = button[i].value;
            firstOperator = currentOperation;
          }
        } else if (firstOperator !== null && secondOperator === null) {
          secondOperator = button[i].value;
          currentOperation = secondOperator;
        } else {
          firstOperator = button[i].value;
          currentOperation = firstOperator;
        }
      }
    })
  }
}

//Handle the equals Button
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (button[i].classList.contains("equals")) {
      if (firstNumber !== null && firstOperator !== null) {
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        let result = operate(firstOperator, num1, num2);
        if (!isNaN(result)) {
          displayValue = result.toString();
          populateDisplay();
          firstNumber = result.toString();
          firstOperator = currentOperation;
          secondNumber = null;
          secondOperator = null;
        }
      }
    }
  });
}

buttonClick();
getOperator();

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
  console.log("a: ", a);
  console.log("op", op);
  console.log("b: ", b);
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