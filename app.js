// Define basic arithmetic operations as functions
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

// Variables to store user input
let firstNumber;
let secondNUmber; // Note: Typo, should be secondNumber
let operator;

// Select elements from the HTML document
const display = document.querySelector(".display"); // Display screen
const numbers = document.querySelectorAll(".numbers"); // Number buttons
const operators = document.querySelectorAll(".mathKeys"); // Operator buttons
const equals = document.getElementById("result"); // Equals button
display.textContent = ""; // Initialize display content

// Function to update the display with a number or operator
const changeNum = function (num) {
  // Check if the display content length is less than 25 characters
  if (display.textContent.length < 25) {
    display.textContent += num.textContent;
  }
};

// Add click event listeners to number buttons
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    changeNum(number);
  });
});

// Add click event listeners to operator buttons
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    changeNum(operator);
    console.log(operator.textContent); // Log the clicked operator
  });
});

// Function to perform calculations when the equals button is clicked
equals.addEventListener("click", function () {
  let splitScreen;
  let thirdNumber;
  let additionResult;
  let subtractionResult;
  let divisionResult;
  let multiplicationResult;

  // Split the display content using operators (+, -, *, /)
  splitScreen = display.textContent.split(/[+-/*]/);

  // Convert the split parts into numbers
  firstNumber = Number(splitScreen[0]);
  secondNUmber = Number(splitScreen[1]); // Note: Typo, should be secondNumber
  thirdNumber = Number(splitScreen[2]);

  // Check which operators are present in the display content and perform calculations accordingly
  if (display.textContent.includes("+") && display.textContent.includes("-")) {
    additionResult = add(firstNumber, secondNUmber) - thirdNumber;
    display.textContent = additionResult;
    console.log(additionResult);
  } else if (display.textContent.includes("+") && display.textContent.includes("*")) {
    additionResult = (thirdNumber * secondNUmber) + firstNumber;
    console.log(additionResult);
    display.textContent = additionResult;
  } else if (display.textContent.includes("+") && display.textContent.includes("/")) {
    additionResult = divide(secondNUmber, thirdNumber) + firstNumber;
    display.textContent = additionResult;
    console.log(additionResult);
  } else {
    additionResult = firstNumber + secondNUmber + thirdNumber
    display.textContent = additionResult;
    console.log(additionResult);
  }
  
  if (display.textContent.includes("-") && display.textContent.includes("+")) {
    subtractionResult = subtract(firstNumber, secondNUmber) + thirdNumber;
    display.textContent = subtractionResult;
  } else if (display.textContent.includes("-") && display.textContent.includes("*")) {
    subtractionResult = firstNumber - multiply(secondNUmber, thirdNumber);
    display.textContent = subtractionResult;
  } else if (display.textContent.includes("-") && display.textContent.includes("/")) {
    subtractionResult = firstNumber - divide(secondNUmber, thirdNumber);
    display.textContent = subtractionResult;
  } else {
    subtractionResult = firstNumber - secondNUmber -thirdNumber;
    display.textContent = subtractionResult;
  }

  if (display.textContent.includes("/") && display.textContent.includes("+")) {
    divisionResult = divide(firstNumber, secondNUmber) + thirdNumber;
    display.textContent = divisionResult;
  } else if (display.textContent.includes("/") && display.textContent.includes("-")) {
    divisionResult = divide(firstNumber, secondNUmber) - thirdNumber;
    display.textContent = divisionResult;
  } else if (display.textContent.includes("/") && display.textContent.includes("*")) {
    divisionResult = divide(firstNumber, secondNUmber) * thirdNumber;
    display.textContent = divisionResult;
  } else {
    divisionResult = firstNumber / secondNUmber / thirdNumber;
    display.textContent = divisionResult;
  }

  if (display.textContent.includes("*") && display.textContent.includes("+")) {
    multiplicationResult = multiply(firstNumber, secondNUmber) + thirdNumber;
    display.textContent = multiplicationResult;
  } else if (display.textContent.includes("*") && display.textContent.includes("-")) {
    multiplicationResult = multiply(firstNumber, secondNUmber) - thirdNumber;
    display.textContent = multiplicationResult;
  } else if (display.textContent.includes("*") && display.textContent.includes("/")) {
    multiplicationResult = multiply(firstNumber, secondNUmber) / thirdNumber;
    display.textContent = multiplicationResult;
  } else {
    multiplicationResult = multiply(firstNumber, secondNUmber) * thirdNumber;
    display.textContent = multiplicationResult;
  }
});

// Function to reset the display
const resetPage = function () {
  display.textContent = "";
};
