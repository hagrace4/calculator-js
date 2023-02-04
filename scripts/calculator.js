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

// **variables**
let displayValue = "";
// set user input to display
const userInput = document.querySelector('.user-input');

// Event listeners for buttons
const sevenBtn = document.getElementById("seven");
sevenBtn.addEventListener("click", () => {
  displayValue = sevenBtn.textContent;
  userInput.textContent = displayValue;
});


const eightBtn = document.getElementById("eight");
eightBtn.addEventListener("click", () => {
  displayValue = eightBtn.textContent;
  userInput.textContent = displayValue;
});

const nineBtn = document.getElementById("nine");
nineBtn.addEventListener("click", () => {
  displayValue = nineBtn.textContent;
  userInput.textContent = displayValue;
});

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
  displayValue = addBtn.textContent;
  userInput.textContent = displayValue;
});

const fourBtn = document.getElementById("four");
fourBtn.addEventListener("click", () => {
  displayValue = fourBtn.textContent;
  userInput.textContent = displayValue;
});

const fiveBtn = document.getElementById("five");
fiveBtn.addEventListener("click", () => {
  displayValue = fiveBtn.textContent;
  userInput.textContent = displayValue;
});

const sixBtn = document.getElementById("six");
sixBtn.addEventListener("click", () => {
  displayValue = sixBtn.textContent;
  userInput.textContent = displayValue;
});

const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener("click", () => {
  displayValue = subtractBtn.textContent;
  userInput.textContent = displayValue;
});

const oneBtn = document.getElementById("one");
oneBtn.addEventListener("click", () => {
  displayValue = oneBtn.textContent;
  userInput.textContent = displayValue;
});

const twoBtn = document.getElementById("two");
twoBtn.addEventListener("click", () => {
  displayValue = twoBtn.textContent;
  userInput.textContent = displayValue;
});

const threeBtn = document.getElementById("three");
threeBtn.addEventListener("click", () => {
  displayValue = threeBtn.textContent;
  userInput.textContent = displayValue;
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener("click", () => {
  displayValue = multiplyBtn.textContent;
  userInput.textContent = displayValue;
});

const zeroBtn = document.getElementById("zero");
zeroBtn.addEventListener("click", () => {
  displayValue = zeroBtn.textContent;
  userInput.textContent = displayValue;
});

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0;

// doCalc() Function
// Function to calculate the result
function handleNumber(event) {
  // Get the target element and its text content
  const target = event.target;
  const text = target.textContent;

  // Get the current value of the display
  const display = document.querySelector(".user-input");
  let displayValue = display.textContent;

  // check if the display value is currently showing an error message
  if (displayValue == "Error") {
    //if so, clear the display to empty string
    displayValue = "";
  }

  // Append the pressed number to the display value
  displayValue += text;

  // Update the display with the new value
  display.textContent = displayValue;
}