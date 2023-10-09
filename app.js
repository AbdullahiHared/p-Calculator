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
  return (a/b).toFixed(3);
};

const topDisplay = document.querySelector(".top-display")
const bottomDisplay = document.querySelector(".bottom-display")
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clear = document.getElementById("clear")
const result = document.getElementById("result");

let equation = []
let currentNumber = ""
let operatorCount = 0
let currentOperator = ""
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
    if (bottomDisplay.textContent.length < 17 && equation.length !== 1) {
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

function isOperatorRule(operator) {
    return operator === "÷" || operator === "×";
}
function isOperator(operator) {
    return operator === "+" || operator === "-";
}

function clearDisplay() {
    topDisplay.textContent = bottomDisplay.textContent
    bottomDisplay.textContent = ""
    equation = []
    currentOperator = ""
    currentNumber = ""
    operatorCount = 0
}

function displayResult() {
    equation.push(currentNumber)
    if (equation.length > 0) {
        if (currentNumber !== "") {
            topDisplay.textContent = bottomDisplay.textContent
            bottomDisplay.textContent = calculate()
        }
    }

}

function calculate() {
    compute()
    compute()
    return equation[0]
}

function pairComputation(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "×":
            return multiply(firstNumber, secondNumber)
        case "÷":
            return divide(firstNumber, secondNumber)
        case "-":
            return subtract(firstNumber, secondNumber)
        case "+":    
            return add(firstNumber, secondNumber)
    }
}


function compute() {
    let operatorIndex = getRuleIndex()
    let firstNumber = Number(equation[operatorIndex - 1])
    let operator =  equation[operatorIndex]
    let secondNumber = Number(equation[operatorIndex + 1])
    
    const computed = pairComputation(firstNumber, operator, secondNumber)
    equation.splice(operatorIndex - 1, operatorIndex + 2, computed)
}

function getRuleIndex() {
    let firstOperator = equation[1]
    let secondOperator = equation[3]
    
    if (firstOperator) {
        if (isOperator(firstOperator) && secondOperator) {
            return 3
        }else {
            return 1
        }
    }else if (secondOperator) {
        if (isOperator(secondOperator)) {
            return 1
        }else {
            return 3
        }
    }
}