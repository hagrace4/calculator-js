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
});

const fourBtn = document.getElementById("four");
fourBtn.addEventListener("click", () => {
  displayValue = fourBtn.textContent;
});

const fiveBtn = document.getElementById("five");
fiveBtn.addEventListener("click", () => {
  displayValue = fiveBtn.textContent;
});

const sixBtn = document.getElementById("six");
sixBtn.addEventListener("click", () => {
  displayValue = sixBtn.textContent;
});

const subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener("click", () => {
  displayValue = subtractBtn.textContent;
});

const oneBtn = document.getElementById("one");
oneBtn.addEventListener("click", () => {
  displayValue = oneBtn.textContent;
});

const twoBtn = document.getElementById("two");
twoBtn.addEventListener("click", () => {
  displayValue = twoBtn.textContent;
});

const threeBtn = document.getElementById("three");
threeBtn.addEventListener("click", () => {
  displayValue = threeBtn.textContent;
});

const multiplyBtn = document.getElementById("multiply");
multiplyBtn.addEventListener("click", () => {
  displayValue = multiplyBtn.textContent;
});

const zeroBtn = document.getElementById("zero");
zeroBtn.addEventListener("click", () => {
  displayValue = zeroBtn.textContent;
});


