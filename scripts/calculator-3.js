// **variables**
let displayValue = "0";
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

function updateDisplay() {
  display.innerText = displayValue;
}



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
    displayValue += button.value;
    updateDisplay();
  });
});

//handle clear button press
const clearButton = document.querySelectorAll('.clear, .all-clear');
clearButton.forEach(button => {
  button.addEventListener('click', () => {
    clearDisplay();
    updateDisplay();
  })
})

// Select the equals button and add an event listener
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
  console.log('equals clicked!');
  const result = math.evaluate(displayValue);
  displayValue = result;
  updateDisplay();
});


function clearDisplay() {
  displayValue = "0";
  result = null;
  updateDisplay();
}