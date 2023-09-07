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
const numbers = document.querySelectorAll('.numbers');
display.textContent = "";


const changeNum = function(num) {
    return display.textContent += num.textContent;
}
numbers.forEach(number => {
    number.addEventListener('click', () => {
        changeNum(number);
    });
});