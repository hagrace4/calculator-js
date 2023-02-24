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
    } else if (firstOperator != null && secondOperator== null) {
      console.log('operator2 clicked'); //debug
      //handle input and storing of secondOperand
    }
  });
});