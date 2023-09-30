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
  let thirdNumber;
  let result;
  // split the screen using the operators
  splitScreen = display.textContent.split(/[+-/*]/);
  firstNumber = Number(splitScreen[0]);
  secondNUmber = Number(splitScreen[1]);
  thirdNumber = Number(splitScreen[2]);

  // add
  if (display.textContent.includes("+")) {
    result = add(firstNumber, secondNUmber);
    display.textContent = result;
    // subtract
    
  } else if (display.textContent.includes("-")) {
    result = subtract(firstNumber, secondNUmber);
    display.textContent = result;
    // multiply

  } else if (display.textContent.includes("*")) {
    result = multiply(firstNumber, secondNUmber);
    display.textContent = result;

    // divide
  } else if (display.textContent.includes("/")) {
    result = divide(firstNumber, secondNUmber);
    display.textContent = result.toFixed(3);
    
  }
});  

// reset
const resetPage = function () {
  display.textContent = "";
};
