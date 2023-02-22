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

updateDisplay();

function buttonClick() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (buttons[i].classList.contains('operand')) {
        console.log('number pressed'); //debug
        inputOperand(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains('operator')) {
        console.log('operator pressed'); //debug
        inputOperand(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains('equals')) {
        console.log('equals pressed'); //debug
        inputEquals(buttons[i].value);
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

//function to handle when equals is clicked
function inputEquals() {
  if (firstOperator === null) {
    displayValue = displayValue;
  } else if (secondOperator != null) {
    //handle final result
    secondNumber = displayValue;
    result = operate(secondOperator, firstNumber, secondNumber);
    if (result === 'oops') {
      displayValue = 'oops';
    } else {
      displayValue = result.toString();
      firstNumber = displayValue
      secondNumber = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  } else {
    // handle first operation
    secondNumber = displayValue;
    result = operate(firstOperator, firstNumber, secondNumber);
    if (result === 'oops') {
      displayValue === 'oops';
    } else {
      displayValue = result.toString();
      firstNumber = displayValue;
      secondNumber = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
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