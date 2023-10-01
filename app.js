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

  function operate () {
    // Variables to store user input
    let firstNumber;
    let secondNumber;
    let splitScreen;
    let thirdNumber;
    

    // Split the display content using operators (+, -, *, /)
    splitScreen = display.textContent.split(/[+-/*]/);

    // Convert the split parts into numbers
    firstNumber = Number(splitScreen[0]);
    secondNumber = Number(splitScreen[1]); // Note: Typo, should be secondNumber
    thirdNumber = Number(splitScreen[2]);

    // Check which operators are present in the display content and perform calculations accordingly
    if (display.textContent.includes("+") && display.textContent.includes("-")) {
      result = add(firstNumber, secondNumber) - thirdNumber || subtract(firstNumber, secondNumber) + thirdNumber;
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("+") && display.textContent.includes("*")) {
      result =   firstNumber + (secondNumber * thirdNumber) ||(firstNumber * secondNumber) + thirdNumber;
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("+") && display.textContent.includes("/")) {
      result = firstNumber + (secondNumber / thirdNumber) || (firstNumber / secondNumber) + thirdNumber;
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("+")) {
      result = firstNumber + secondNumber + thirdNumber || firstNumber + secondNumber;
      display.textContent = result;
      console.log(result);
    }

    if (display.textContent.includes("-") && display.textContent.includes("*")) {
      result = firstNumber - (secondNumber * thirdNumber) || (firstNumber * secondNumber) - thirdNumber;
      console.log(result);
      display.textContent = result;
    } else if (display.textContent.includes("-") && display.textContent.includes("/")) {
      result = firstNumber - (firstNumber / secondNumber) || (firstNumber / secondNumber) - thirdNumber;
      console.log(result);
    } else if (display.textContent.includes("-")) {
      result = firstNumber - secondNumber - thirdNumber || firstNumber - secondNumber;
      console.log(result);
    }

    if (display.textContent.includes("/") && display.textContent.includes("*")) {
      result = thirdNumber *  (firstNumber / secondNumber) || firstNumber * (secondNumber / thirdNumber);
      display.textContent = result;
      console.log(result);

    } else if (display.textContent.includes("/")) {
      result = firstNumber / secondNumber / thirdNumber || firstNumber / secondNumber;
      console.log(result);
      display.textContent = result;
    }

    if (display.textContent.includes("*")) {
      result = firstNumber * secondNumber * thirdNumber || firstNumber * secondNumber;
      console.log(result);
      display.textContent = result;
    } 

  
  }

// Function to perform calculations when the equals button is clicked
equals.addEventListener("click", function () {
  operate();
});

// Function to reset the display
const resetPage = function () {
  display.textContent = "";
};
