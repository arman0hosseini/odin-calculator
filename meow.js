const keys = document.querySelector(".cal-keys");
keys.addEventListener("click",


    function (event) {
        let target = event.target;

        // Clear Button
        if (target.classList.contains("clear")) clear();

        // Numbers
        if (target.classList.contains("number")) {
            if (calDisplay.textContent == "0" || calDisplay.textContent == "ERROR" || lastNum.textContent == "ERROR") {
                clear();
                calDisplay.textContent = target.value;
            }
            else {
                calDisplay.textContent += target.value;
            }
        }

        //Operators
        if (target.classList.contains("operator")) {
            if (calDisplay.textContent == "ERROR") {
                clear();
            }
            else if (operator == undefined) {
                operator = target.value;
                firstNumber = Number(calDisplay.textContent);
                calDisplay.textContent = "0";
                lastNum.textContent = `${firstNumber} ${operator}`;
            }
            else if (isFinished) {
                operator = target.value;
                firstNumber = calDisplay.textContent;
                isFinished = false;
                calDisplay.textContent = "0";
                lastNum.textContent = `${firstNumber} ${operator}`;
            }
        }

        // Equal Sign 
        if (target.classList.contains("equal")) {
            secondNumber = Number(calDisplay.textContent);
            if (operator == "/" && secondNumber == 0) {
                lastNum.textContent = "ERROR";
                calDisplay.textContent = "ERROR";
                return
            }
            let result = operate(firstNumber, operator, secondNumber);
            calDisplay.textContent = result;
            isFinished = true;
            lastNum.textContent = `${firstNumber} ${operator} ${secondNumber} =`
        }
    }


)
