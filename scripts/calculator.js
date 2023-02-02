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

let operandA = 0;
let operandB = 0;
let operator = "";

operate(operator, operandA, operandB);