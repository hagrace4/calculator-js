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
    if (firstOperator == null) {
      if (displayValue === "0" || displayValue === 0) {
        displayValue = button.value;
      } else {
        displayValue += button.value;
      }
    } else if (firstOperator != null && secondOperator == null) {
      //handle second Operand
      clearDisplay();
      displayValue = button.value;
      secondOperand = displayValue;
    }
    updateDisplay();
  });
});

//Handle operator button presses
const opButtons = document.querySelectorAll('.operator');
opButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (firstOperator == null) {
      //handle first operand clicks
      console.log('operator1 clicked'); //debug
      firstOperand = displayValue;
      firstOperator = button.value;
    } else if (firstOperator != null) {
      console.log('operator2 clicked'); //debug
      //handle input and storing of secondOperand
      secondOperand = displayValue;
    }
  });
});

// Handle Equals Button Press
const equalsButton = document.querySelectorAll('.equals');
equalsButton.forEach(button => {
  button.addEventListener('click', () => {
    displayValue = operate(firstOperator, Number(firstOperand), Number(secondOperand));
    updateDisplay();
  })
})


//handle clear button press
const clearButton = document.querySelectorAll('.clear, .all-clear');
clearButton.forEach(button => {
  button.addEventListener('click', () => {
    displayValue = "0";
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    updateDisplay();
  })
})

function updateDisplay() {
  display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  // firstOperand = null;
  // secondOperand = null;
  // firstOperator = null;
  // secondOperator = null;
  // result = null;
  updateDisplay();
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