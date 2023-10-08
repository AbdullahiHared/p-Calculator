const add = function (a, b) {
  return a + b;
};
function subtract(a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const topDisplay = document.querySelector(".top-display")
const bottomDisplay = document.querySelector(".bottom-display")
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clear = document.getElementById("clear")
const result = document.getElementById("result");

let equation = [];
let currentNumber = "";
let operatorCount = 0;
let currentOperator = "";

numbers.forEach((number) => {
  number.addEventListener('click', () => {
      updateDisplay(number);
  });
});
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
      updateDisplay(operator)
  });
});

clear.addEventListener('click', () => {
    clearDisplay()
})
result.addEventListener('click', () => {
    displayResult()
})

function updateDisplay(val) {
    if (bottomDisplay.textContent.length < 17) {
        const value = val.textContent
        if (!notOperator(value)) {
            bottomDisplay.textContent += value
            currentNumber += value
            currentOperator = ""
        }else {
            equation.push(currentNumber)
            currentNumber = ""
            updateDisplayOperator(value)
        }
    }
}

function updateDisplayOperator(operator) {
    if (equation.length > 0 && operatorCount !== 2) {
        if (!notOperator(equation[equation.length - 1]) && currentOperator === "") {
            operatorCount += 1
            currentOperator = operator;
            equation.push(operator)
            bottomDisplay.textContent += ` ${operator} `
        }
    }
}

function notOperator(val) {
    return !(val !== "×" && val !== "-" && val !== "÷" && val !== "+");
}

function clearDisplay() {
    topDisplay.textContent = bottomDisplay.textContent
    bottomDisplay.textContent = ""
}

function displayResult() {
    equation.push(currentNumber)
    if (equation.length > 0) {
        if (currentNumber !== "") {
            topDisplay.textContent = bottomDisplay.textContent
            bottomDisplay.textContent = subtract(Number(equation[0]), Number(equation[2]))
        }
    }
}