
// **variables**
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const button = document.querySelectorAll('button');



// Event listener for buttons
const btnPress = document.addEventListener('click', function (e) {


})

function populateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue;

}

function buttonClick() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      if (button[i].classList.contains('operand')) {
        displayValue = button[i].value;
        populateDisplay();
        firstNumber = displayValue;
        // console.log(button[i].value);
      }
    })
  }
}

buttonClick();

function getOperator() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      if (button[i].classList.contains('operator')) {
        firstOperator = button[i].value;
        displayValue = button[i].value;
        console.log(firstOperator);
      }
    })
  }
}

getOperator();

function doCalc() {


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
