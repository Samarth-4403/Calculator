let firstOperand = null;
let operator = null;
let secondOperand = null;
let displayValue = '0';
let decimalClicked = false;

const display = document.getElementById('display');

function clearDisplay() {
    firstOperand = null;
    operator = null;
    secondOperand = null;
    displayValue = '0';
    clearDecimalClicked();
    updateDisplay();
}

function backspace () {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
    disableDecimalButton();
}

function appendDecimal() {
    if (!decimalClicked) {
        display += '.';
        decimalClicked = true;
        updateDisplay();
    }
}

function opeate(op) {
    if (operator && secondOperand !== null) {
        calculate();
        firstOperand = displayValue;
        operator = op;
        secondOperand = null;
    } else {
        firstOperand = displayValue;
        operator = op;
    }
    displayValue = '0';
    clearDecimalClicked();
}

function calculate() {
    if (operator && firstOperand !== null && secondOperand !== null) {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(displayValue);
        switch (operator) {
            case '+':
                displayValue = (firstOperand + secondOperand).toString();
                break;
            case '-':
                displayValue = (firstOperand - secondOperand).toString();
                break;
            case '*':
                displayValue = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand === 0) {
                    displayValue = 'ERROR';
                } else {
                    displayValue = (firstOperand / secondOperand).toString();
                }
                break;
            default:
                break;
        }
        decimalClicked = false;
        firstOperand = null;
        operator = null;
        updateDisplay();
    }
}

function equals() {
    if (operator && firstOperand !== null) {
        calculate();
    }
}

function disableDecimalButton() {
    const decimalButton = document.querySelector('button[data-value="."]');
    if (displayValue.includes('.')) {
        decimalButton.disabled = true;
    } else {
        decimalButton.disabled = false;
    }
}

function clearDecimalClicked() {
    decimalClicked = false;
}