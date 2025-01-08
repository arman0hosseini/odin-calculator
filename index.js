// Basic Math Operation Functions
function sum(a, b) {
    return Number(a) + Number(b);
};
function subtract(a, b) {
    return a - b;
};
function multipy(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

// Operate Function
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
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


// Operator and Operands Variables
let firstNumber = 0;
let operator;
let secondNumber = 0;




