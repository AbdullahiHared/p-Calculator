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

 // Variables to store user input
 let firstNumber;
 let secondNumber;
 let splitScreen;
 let thirdNumber;
 let result;
 

 // Split the display content using operators (+, -, *, /)
 splitScreen = display.textContent.split(/[+-/*]/);

 // Convert the split parts into numbers
 firstNumber = Number(splitScreen[0]);
 secondNumber = Number(splitScreen[1]); 
 thirdNumber = Number(splitScreen[2]);
  

    // Check which operators are present in the display content and perform calculations accordingly

  function division() {
    if (display.textContent.includes("/") && display.textContent.includes("*")) {
      result = divide(firstNumber, secondNumber)  * thirdNumber || firstNumber * divide(secondNumber, thirdNumber)
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("/") &&  display.textContent.includes("+")) {
      result = divide(firstNumber, secondNumber) + thirdNumber || firstNumber + divide(secondNumber, thirdNumber);
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("/")&&  display.textContent.includes("-")) {
      result = divide(firstNumber, secondNumber) - thirdNumber || firstNumber - divide(secondNumber, thirdNumber);
      display.textContent = result;
      console.log(result);
    } else if ( display.textContent.includes("/")) {
      result = firstNumber / second / thirdNumber || firstNumber / secondNumber;
      display.textContent = result;
    }
  }

  function multiplication() {
    if (display.textContent.includes("/") && display.textContent.includes("*")) {
      result = divide(firstNumber, secondNumber)  * thirdNumber || firstNumber * divide(secondNumber, thirdNumber)
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("*") &&  display.textContent.includes("+")) {
      result = multiplication(firstNumber, secondNumber) + thirdNumber || multiply(secondNumber, thirdNumber) + firstNumber;
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("*")&&  display.textContent.includes("-")) {
      result = multiply(firstNumber, secondNumber) - thirdNumber || firstNumber - multiply(secondNumber, thirdNumber);
      display.textContent = result;
      console.log(result);
    } else if ( display.textContent.includes("*")) {
      result = firstNumber * secondNumber * thirdNumber || firstNumber * secondNumber;
      display.textContent = result;
    }
  }

  function addition () {
     if (display.textContent.includes("+") && display.textContent.includes("*")) {
      result = multiply(firstNumber, secondNumber)  + thirdNumber || firstNumber + multiply(secondNumber, thirdNumber)
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("/") &&  display.textContent.includes("+")) {
      result = divide(firstNumber, secondNumber) + thirdNumber ||divide(secondNumber, thirdNumber) + firstNumber;
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("+")&&  display.textContent.includes("-")) {
      result = add(firstNumber, secondNumber) - thirdNumber || firstNumber - add(secondNumber, thirdNumber);
      display.textContent = result;
      console.log(result);
    } else if ( display.textContent.includes("/")) {
      result = firstNumber+ second + thirdNumber || firstNumber + secondNumber;
      display.textContent = result;
    }
  }

  function subtraction () {
    if (display.textContent.includes("/") && display.textContent.includes("-")) {
      result = divide(firstNumber, secondNumber)  - thirdNumber || firstNumber - divide(secondNumber, thirdNumber)
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("-") &&  display.textContent.includes("+")) {
      result = add(firstNumber, secondNumber) - thirdNumber || firstNumber - add(secondNumber, thirdNumber);
      display.textContent = result;
      console.log(result);
    } else if (display.textContent.includes("*")&&  display.textContent.includes("-")) {
      result = multiply(firstNumber, secondNumber) - thirdNumber || firstNumber - multiply(secondNumber, thirdNumber);
      display.textContent = result;
      console.log(result);
    } else if ( display.textContent.includes("/")) {
      result = firstNumber - second - thirdNumber || firstNumber - secondNumber;
      display.textContent = result;
    }
  }


// Function to perform calculations when the equals button is clicked
equals.addEventListener("click", function () {
 let operator;

 if (display.textContent.includes("/")) {
  operator = "/";
 } else if (display.textContent.includes("*")) {
  operator = "*";
 } else if (display.textContent.includes("+")) {
  operator = "+";
 } else if (display.textContent.includes("-")) {
  operator = "-";
 } else {
  console.log("no operator found");
 }

 splitScreen = display.textContent.split(/[+-/*]/);

 switch (operator) {
  case "/":
    division();
    break;
  case "*":
    multiplication();
    break;
  case "+":
    addition();
    break;
  case "-":
    subtraction();
    break;
  default:
    console.log("Invalid operator");
}
});




// Function to reset the display
const resetPage = function () {
  display.textContent = "";
  console.clear();
};