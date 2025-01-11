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
            if (secondNumber == "0") {
                clear();
                displayError();
                return false;
            }
            return divide(firstNumber, secondNumber);
            break;
        default:
            return "meow";
    }
}

// Display Error Function 
function displayError() {
    isOkay = false;
    lastDisplay.textContent = "ERROR";
    currentDisplay.textContent = "ERROR";
}

// Clear Function
function clear() {
    firstNumber = 0;
    secondNumber = 0;
    mainOperator = null;
    isOkay = true;
    nextDigit = false;
    lastDisplay.textContent = "";
    currentDisplay.textContent = "0";
}

// Variables
let firstNumber;
let secondNumber;
let mainOperator;
let isOkay;
let nextDigit;

// Nodes
const keys = document.querySelector(".cal-keys");
const lastDisplay = document.querySelector(".last-display");
const currentDisplay = document.querySelector(".current-display");



keys.addEventListener("click",
    function (event) {
        let target = event.target;

        if (target.classList.contains("clear")) clear();

        if (target.classList.contains("number")) {
            if (isOkay) {
                if (!nextDigit || currentDisplay.textContent == "0") {
                    currentDisplay.textContent = target.value;
                    nextDigit = true;
                }
                else currentDisplay.textContent += target.value;
            }
            else clear();
        }

        if (target.classList.contains("operator")) {
            if (isOkay) {
                if (!mainOperator) {
                    firstNumber = Number(currentDisplay.textContent);
                    mainOperator = target.value;
                    currentDisplay.textContent = "0";
                    lastDisplay.textContent = `${firstNumber} ${mainOperator}`;
                    nextDigit = false;
                }
                else {
                    secondNumber = Number(currentDisplay.textContent);
                    lastDisplay.textContent = `${firstNumber} ${mainOperator} ${secondNumber} =`;
                    let result = operate(firstNumber, mainOperator, secondNumber);
                    if (!isOkay) {
                        return;
                    }
                    mainOperator = target.value;
                    currentDisplay.textContent = result;
                    firstNumber = result;
                    nextDigit = false;
                }

            }
            else clear();
        }

        if (target.classList.contains("equal")) {
            if (isOkay) {
                if (mainOperator) {
                    secondNumber = Number(currentDisplay.textContent);
                    lastDisplay.textContent = `${firstNumber} ${mainOperator} ${secondNumber} =`;
                    let result = operate(firstNumber, mainOperator, secondNumber);
                    if (!isOkay) {
                        return;
                    }
                    mainOperator = null;
                    currentDisplay.textContent = result;
                    firstNumber = result;
                    nextDigit = false;
                }
            }
            else clear();
        }
    }
)










clear();