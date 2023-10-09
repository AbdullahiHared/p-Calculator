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
let operatorRuleCheck = false

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
            if (isOperatorRule(operator)) {
                operatorRuleCheck = true
            } 
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
    operatorRuleCheck = false
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
    console.log(equation)
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
    while(equation.length !== 1) {
        let operatorIndex = getRuleIndex()
        let firstNumber = Number(equation[operatorIndex - 1])
        let operator =  equation[operatorIndex]
        let secondNumber = Number(equation[operatorIndex + 1])

        if (operatorRuleCheck) {
            const computed = pairComputation(firstNumber, operator, secondNumber)
            console.log(computed)
            equation.splice(operatorIndex - 1, operatorIndex + 2, computed)
        }else {
            const computed = pairComputation(firstNumber, operator, secondNumber)
            console.log(computed)
            equation.splice(operatorIndex - 1, operatorIndex + 2, computed)
        }

        console.log(equation)
    }
}

function getRuleIndex() {
    let index = 0;
    equation.forEach((n, currentIndex) => {
        if (isOperatorRule(n)) {
            index = currentIndex
        }else if (isOperator(n)) {
            index = currentIndex
        }
    })
    return index
}