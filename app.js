const add = function (a,b) {
    return a + b;
}
const subtract = function (a, b) {
    return a - b;
}
const multiply = function (a, b) {
    a * b;
}
const divide = function (a, b) {
    return a / b;
}


let firstNumber;
let secondNumber;
let operator;

const operate = function(a, b) {
    return divide(a,b);
}
const display = document.querySelector('.display');
const numOne = document.querySelector('#one');
const numTwo = document.querySelector('#two');
const numThree = document.querySelector('three');
const numFour = document.querySelector('#four');
const numFive = document.querySelector('#five');
const numSix = document.querySelector('#six');
const numSeven = document.querySelector('#seven');
const numEight = document.querySelector('#eight');
const numNine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimalNum = document.querySelector('#decimal');
const divideKey= document.querySelector('#divide');
const multiplyKey = document.querySelector('#multiply');
const addKey = document.querySelector('#add');
const subtractKey = document.querySelector('#subtract');



display.textContent = "";
function changeNum(num) {
    display.textContent += num;
}
numOne.addEventListener("click", () => {
    changeNum("1");
});
numTwo.addEventListener("click", () => {
    changeNum("2");
});
numThree.addEventListener("click", () => {
    changeNum("3");
});
numFour.addEventListener("click", () => {
    changeNum("4");
});
numFive.addEventListener("click", () => {
    changeNum("5");
});
numSix.addEventListener("click", () => {
    changeNum("6");
});
numSeven.addEventListener("click", () => {
    changeNum("7");
});
numEight.addEventListener("click", () => {
    changeNum("9");
});
zero.addEventListener("click", () => {
    changeNum("0");
});
decimalNum.addEventListener("click", () => {
    changeNum(".");
});
multiplyKey.addEventListener("click", () => {
    changeNum("*");
});
divideKey.addEventListener("click", () => {
    changeNum("/");
});
addKey.addEventListener("click", () => {
    changeNum("+");
});
subtractKey.addEventListener("click", () => {
    changeNum("-");
});

