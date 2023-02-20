
// **variables**
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let currentOperation = null;



const button = document.querySelectorAll('button');



// Event listener for buttons
const btnPress = document.addEventListener('click', function (e) {


})

function populateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue;
  console.log("result: ", result);

}



function buttonClick() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      if (button[i].classList.contains('operand')) {
        displayValue = displayValue === "0" ? button[i].value : displayValue + button[i].value;
        populateDisplay();
        if (firstOperator == null) {
          firstNumber = displayValue;
        } else {
          secondNumber = displayValue;
        }
      }
      if (button[i].classList.contains('operator')) {
        if (firstOperator == null) {
          firstOperator = button[i].value;
        } else {
          secondOperator = button[i].value;
        }
        currentOperation = button[i].value;
      }
    })
  }
}



function getOperator() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
      if (button[i].classList.contains('operator')) {
        if (secondOperator !== null) {
          let num1 = parseFloat(firstNumber);
          let num2 = parseFloat(secondNumber);
          let result = operate(firstOperator, num1, num2);
          if (!isNaN(result)) {
            displayValue = result.toString();
            populateDisplay();
            firstNumber = result.toString();
            firstOperator = currentOperation;
            secondNumber = null;
            secondOperator = null;
          }
          currentOperation = button[i].value;
        } else {
          if (firstOperator === null) {
            firstOperator = button[i].value;
          } else {
            secondOperator = button[i].value;
          }
          currentOperation = button[i].value;
        }
      }
    })
  }
}




getOperator();








// Handle clear and all-clear buttons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("clear")) {
    displayValue = "0";
    populateDisplay();
  } else if (event.target.classList.contains("all-clear")) {
    displayValue = "0";
    firstNumber = null;
    secondNumber = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    populateDisplay();
  }
});



//Handle the equals Button
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (button[i].classList.contains("equals")) {
      if (firstNumber !== null && firstOperator !== null) {
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);
        let result = operate(firstOperator, num1, num2);
        if (!isNaN(result)) {
          displayValue = result.toString();
          populateDisplay();
          firstNumber = result.toString();
          firstOperator = currentOperation;
          secondNumber = null;
          secondOperator = null;
        }
      }
    }
  });
}







// Store second number and operator
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    if (button[i].classList.contains("operand")) {
      if (firstOperator == null) {
        firstNumber = firstNumber === null ? button[i].value : firstNumber + button[i].value;
        console.log("firstNumber: ", firstNumber);
      }
      else {
        secondNumber = secondNumber === null ? button[i].value : secondNumber + button[i].value;
        console.log("secondNumber: ", secondNumber);
      }
      displayValue = firstOperator == null ? firstNumber : secondNumber;
      populateDisplay();
    } else if (button[i].classList.contains("operator")) {
      if (firstOperator === null) {
        firstOperator = button[i].value;
      } else {
        secondOperator = button[i].value;
      }
      displayValue = button[i].value;
      populateDisplay();
    }
  });
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