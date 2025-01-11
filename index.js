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

// Percentage Function
function percentage(number) {
    return number / 100;
}

// Make Negative Number Function
function makePosOrNeg(number) {
    if (isNegative) {
        isNegative = false;
        return -number;
    }
    else {
        isNegative = true;
        return -number;
    }
}

// Has Decimal Function
function hasDecimalPoint(number) {
    if (number % 1 !== 0) {
        pointUsed = true;
        return true;
    }
}

// Decimal Point Function
function addDecimalPoint(number) {
    if (!hasDecimalPoint(number) || !pointUsed) {
        pointUsed = true;
        return `${number}.`;
    }
}

// Clear Function
function clear() {
    firstNumber = 0;
    secondNumber = 0;
    mainOperator = null;
    isOkay = true;
    nextDigit = false;
    pointUsed = false;
    isNegative = false;
    lastDisplay.textContent = "";
    currentDisplay.textContent = "0";
}

// Variables
let firstNumber;
let secondNumber;
let mainOperator;
let isOkay;
let nextDigit;
let pointUsed;
let isNegative;

// Nodes
const keys = document.querySelector(".cal-keys");
const lastDisplay = document.querySelector(".last-display");
const currentDisplay = document.querySelector(".current-display");

// Click Event Listener
keys.addEventListener("click",
    function (event) {
        let target = event.target;

        if (target.classList.contains("clear")) clear();

        if (target.classList.contains("percentage")) {
            if (isOkay) {
                let currentNumber = Number(currentDisplay.textContent);
                currentDisplay.textContent = percentage(currentNumber);
            }
            else clear();
        }


        if (target.classList.contains("pos-neg")) {
            if (isOkay) {
                let currentNumber = Number(currentDisplay.textContent);
                currentDisplay.textContent = makePosOrNeg(currentNumber);
            }
            else clear();
        }

        if (target.classList.contains("point")) {
            if (isOkay) {
                if (!pointUsed) {
                    let currentNumber = Number(currentDisplay.textContent);
                    currentDisplay.textContent = addDecimalPoint(currentNumber);
                }
            }
            else clear();
        }

        if (target.classList.contains("number")) {
            if (isOkay) {
                if (!nextDigit || currentDisplay.textContent == "0") {
                    currentDisplay.textContent = target.value;
                    pointUsed = false;
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
                    pointUsed = false;
                    lastDisplay.textContent = `${firstNumber} ${mainOperator}`;
                    nextDigit = false;
                }
                else {
                    secondNumber = Number(currentDisplay.textContent);
                    lastDisplay.textContent = `${firstNumber} ${mainOperator} ${secondNumber} =`;
                    let result = operate(firstNumber, mainOperator, secondNumber);
                    if (!hasDecimalPoint(result)) pointUsed = false;
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
                    if (!hasDecimalPoint(result)) pointUsed = false;
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