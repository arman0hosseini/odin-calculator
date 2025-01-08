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
            if (secondNumber == 0) {
                clear();
                isOkay = false;
                currentDisplay.textContent = "ERROR";
                lastDispaly.textContent = "ERROR";
                return;
            }
            return divide(firstNumber, secondNumber);
            break;
        default:
            return "meow";
    }
}


//Clear Function
function clear() {
    firstNumber = 0;
    operator = undefined;
    secondNumber = 0;
    isFinished = false;
    isOkay = true;
    nextNumber = true;
    currentDisplay.textContent = "0";
    lastDispaly.textContent = "";
}
// Operator and Operands Variables
let firstNumber;
let operator;
let secondNumber;
let isFinished;
let isOkay;
let nextNumber;
//Nodes
const currentDisplay = document.querySelector(".current-display");
const lastDispaly = document.querySelector(".last-display");
const keys = document.querySelector(".cal-keys");


keys.addEventListener("click",
    function (event) {
        let target = event.target;
        if (target.classList.contains("clear")) clear();

        //Number Buttons
        else if (target.classList.contains("number")) {
            if (isFinished || isOkay == false) {
                clear();
                currentDisplay.textContent = target.value;
            }
            else if (nextNumber) {
                currentDisplay.textContent = target.value;
                nextNumber = false;
            }
            else if (currentDisplay.textContent == "0") {
                currentDisplay.textContent = target.value;
            }
            else {
                currentDisplay.textContent += target.value;
            }
        }


        //Operator Buttons
        else if (target.classList.contains("operator")) {
            if (isOkay == false) {
                clear();
            }
            else if (isFinished) {
                isFinished = false;
                nextNumber = true;
                operator = target.value;
                firstNumber = Number(currentDisplay.textContent);
                lastDispaly.textContent = `${firstNumber} ${operator}`;
            }
            else if (operator == undefined) {
                operator = target.value;
                firstNumber = Number(currentDisplay.textContent);
                currentDisplay.textContent = "0"
                lastDispaly.textContent = `${firstNumber} ${operator}`;
            }
        }


        //Equal Button
        else if (target.classList.contains("equal")) {
            if (isFinished == false && isOkay == true) {
                secondNumber = Number(currentDisplay.textContent);
                lastDispaly.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
                let result = operate(firstNumber, operator, secondNumber);
                if (isOkay == false) {
                    isFinished = true
                    return;
                }
                currentDisplay.textContent = result;
                secondNumber = result;
                isFinished = true;
            }
        }



    }
)



clear();