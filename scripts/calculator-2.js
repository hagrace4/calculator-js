// **variables**
let displayValue = "0";
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');



// Event Listener for number buttons
const numButtons = document.querySelectorAll('.operand');
numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (displayValue === "0" || displayValue === 0) {
      displayValue = button.value;
    } else {
      displayValue += button.value;
    }
    updateDisplay();
  })
})

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('operator clicked'); //debug 
    firstOperand = displayValue;
  })
})



function updateDisplay() {
  display.innerText = displayValue;
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