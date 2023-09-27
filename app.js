const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

// operater
let firstNumber;
let secondNUmber;
let operator;

// select elements
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".mathKeys");
const equals = document.getElementById("result");
display.textContent = "";

// display
const changeNum = function (num) {
  if (display.textContent.length < 25) {
    display.textContent += num.textContent;
  }
};

// add event listener to every number
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    changeNum(number);
  });
});

// add event listener to every operator
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    changeNum(operator);
    console.log(operator.textContent);
  });
});



// result
equals.addEventListener("click", function () {
  let splitScreen;
  let result;
  // add
  if (display.textContent.includes("+")) {
    splitScreen = display.textContent.split("+");
    firstNumber = Number(splitScreen[0]);
    secondNUmber = Number(splitScreen[1]);
    result = add(firstNumber, secondNUmber);
    display.textContent = result;
    // subtract
  } else if (display.textContent.includes("-")) {
    splitScreen = display.textContent.split("-");
    firstNumber = Number(splitScreen[0]);
    secondNUmber = Number(splitScreen[1]);
    result = subtract(firstNumber, secondNUmber);
    display.textContent = result;
    // multiply
  } else if (display.textContent.includes("*")) {
    splitScreen = display.textContent.split("*");
    firstNumber = Number(splitScreen[0]);
    secondNUmber = Number(splitScreen[1]);
    result = multiply(firstNumber, secondNUmber);
    display.textContent = result;
    // divide
  } else if (display.textContent.includes("/")) {
    splitScreen = display.textContent.split("/");
    firstNumber = Number(splitScreen[0]);
    secondNUmber = Number(splitScreen[1]);
    result = divide(firstNumber, secondNUmber);
    display.textContent = result;
  }
});  

// reset
const resetPage = function () {
  display.textContent = "";
};
