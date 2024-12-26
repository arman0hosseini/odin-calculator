// Basic Math Operation Functions
function sum(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multipy(a, b) {
    return a * b;
};
function divide(a, b) {
    a / b;
};

// Operator and Operands Variables
let firstNumber;
let operand;
let secondNumber;

// Operate Function
function operate(firstNumber, operand, secondNumber) {
    switch (operand) {
        case "+":
            return sum(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;
        case "*":
            return multipy(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
            break;
        default:
            return "meow";
    }
}