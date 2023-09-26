const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  a * b;
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
  });
});



equals.addEventListener("click", function () {
  
const splitScreen = display.textContent.split("+");
firstNumber =  Number(splitScreen[0]);
secondNUmber =  Number(splitScreen[1]);
display.textContent = firstNumber + secondNUmber;
})









// const store = function (firstNumber, secondNumber) {
//   const splitScreen = display.textContent.split("+");

//   firstNumber = parseInt(splitScreen[0]);
//   secondNumber = parseInt(splitScreen[1]);

//   changeNum(result);
// };

// // reset
const resetPage = function () {
  display.textContent = "";
};