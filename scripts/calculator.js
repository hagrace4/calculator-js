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

// Function to populate the display when number buttons are clicked
function populateDisplay(num) {
  const userInput = document.querySelector('.user-input');
  userInput.textContent += num;
}

// **Event Listeners**
//Number buttons
const numberButtons = document.querySelectorAll('.num-buttons > button');
numberButtons.forEach(button => {
  if (!isNaN(button.textContent)) {
    button.addEventListener('click', () => {
      populateDisplay(button.textContent);
    });
  }
});