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

// Check which operators are present in the display content and perform calculations accordingly
function operate() {
  // Variables to store user input
  let splitScreen =  display.textContent.split(/[/*]/);;  
  let firstNumber = Number(splitScreen[0]);
  let secondNumber  = Number(splitScreen[1]);;
  let thirdNumber  = Number(splitScreen[2]);
  let result;
  let divTester1 = divide(firstNumber, secondNumber) * thirdNumber;
  let divTester2= divide(thirdNumber, secondNumber) * firstNumber;

   if (display.textContent.includes("/") && display.textContent.includes("*")) {
     result = divTester1 || divTester2;
     display.textContent = result;
     console.log(result);
   } 
}

// function that supports operation of three operators

// Function to perform calculations when the equals button is clicked
equals.addEventListener("click", function () {
  operate();
});

// Function to reset the display
const resetPage = function () {
  display.textContent = "";
  console.clear();
};
