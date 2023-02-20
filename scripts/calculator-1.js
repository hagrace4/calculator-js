// **variables**
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');




function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue;
}

function buttonClick() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (buttons[i].classList.contains('operand')) {
        inputOperand(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains('operator')) {
        inputOperand(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains('equals')) {
        // inputEquals(buttons[i].value);
        updateDisplay();
      }
    })
  }
}

buttonClick();

//Function to handle inputs of Operands
function inputOperand(num) {
  if (firstOperator == null) {
    if (displayValue === "0" || displayValue === 0) {
      //handle first operator input
      displayValue = num;
    } else if (displayValue === firstNumber) {
      // begin new operation after inputEquals()
      displayValue = num;
    } else {
      displayValue += num;
    }
  } else {
    // inputs for secondOperand
    if (displayValue === firstNumber) {
      displayValue = num;
    } else {
      displayValue += num;
    }
  }
}

//Function to handle the input of Operators
function inputOperator(op) {
  if (firstOperator != null && secondOperator === null) {
    //Handle second operator input
    secondOperator = op;
    secondNumber = displayValue;
    result = operate(firstOperator, firstNumber, secondNumber);
    displayValue = result;
    firstNumber = displayValue;
    result = null;
  } else if (firstOperator != null && secondOperator != null) {
    // handles subsequent 'second' operators
    secondNumber = displayValue
    result = operate(secondOperator, firstNumber, secondNumber);
    secondOperator = op;
    firstNumber = displayValue;
    result = null;
  } else {
    //handle first operator input
    firstOperator = op;
    firstNumber = displayValue;
  }
}

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
  console.log("op1", op);
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