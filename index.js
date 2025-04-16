let calculatorOperation = { 
    operator: '',
    numberOne: null,
    numberTwo: null,
    clear: false
};

const add = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}


const substract = (numberOne, numberTwo) => {
    return numberOne - numberTwo;
}


const multiply = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
}


const divide = (numberOne, numberTwo) => {
    return numberOne / numberTwo;
}


const operate = (operator, numberOne, numberTwo) => {
    if (operator === '+') {
        return add(numberOne, numberTwo);
    } else if (operator === '-') {
        return substract(numberOne, numberTwo);
    } else if (operator === 'x') {
        return multiply(numberOne, numberTwo);
    } else {
        return divide(numberOne, numberTwo);
    }
}


const initializeNumberButtonsListeners = () => {
    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener('click', (event) => {
            disablePointButton();
            updateCalculatorDisplay(event.target.textContent);
            if (calculatorOperation.numberOne !== null && calculatorOperation.operator !== '') {
                calculatorOperation.numberTwo = getCalculatorDisplay();
            }
        });
    });
}


const initializeOperatorButtonsListeners = () => {
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', (event) => {
            disablePointButton();
            if (calculatorOperation.numberOne !== null && calculatorOperation.operator !== '') {
                calculatorOperation.numberTwo = getCalculatorDisplay();
            } else {
                calculatorOperation.numberOne = getCalculatorDisplay();
                calculatorOperation.operator = event.target.textContent;
            }
            if (calculatorOperation.numberOne !== null && calculatorOperation.numberTwo !== null) {
                calculateResult(event.target.textContent);
            }
            calculatorOperation.clear = true;
        });
    });
}


const disablePointButton = () => {
    if (getCalculatorDisplay().toString().includes('.')) {
        const pointButton = document.querySelector('.number.point');
        pointButton.setAttribute('disabled', '');
    } else {
        const pointButton = document.querySelector('.number.point');
        pointButton.removeAttribute('disabled');
    }
}


const calculateResult = (operator='') => {
    let res = operate(calculatorOperation.operator, calculatorOperation.numberOne, calculatorOperation.numberTwo);
    calculatorOperation.numberOne = res;
    calculatorOperation.numberTwo = null;
    calculatorOperation.operator = operator;
    updateCalculatorDisplay(res, true);
    calculatorOperation.clear = true;
}


const initializeEqualButtondListener = () => {
    const equalButton = document.querySelector('.equal');
    equalButton.addEventListener('click', () => {
        calculateResult();
    });
}


const initializeClearButtonListener = () => {
    const acButton = document.querySelector('.ac');
    acButton.addEventListener('click', () => {
        calculatorOperation.numberOne = null;
        calculatorOperation.numberTwo = null;
        calculatorOperation.operator = '';
        calculatorOperation.clear = false;
        clearCalculatorDisplay();
    });
}


const clearCalculatorDisplay = () => {
    const calculatorDisplay = document.querySelector('.display');
    calculatorDisplay.textContent = '';
}


const updateCalculatorDisplay = (display, isResult=false) => {
    const calculatorDisplay = document.querySelector('.display');
    if (calculatorOperation.operator == '' && calculatorDisplay.textContent === '0') {
        calculatorDisplay.textContent = '';
    }
    if (calculatorOperation.clear) {
        calculatorDisplay.textContent = '';
        calculatorOperation.clear = false;
    } 
    if (!isResult)
        calculatorDisplay.textContent += display;
    else
        calculatorDisplay.textContent = display
} 


const getCalculatorDisplay = () => {
    const calculatorDisplay = document.querySelector('.display');
    return parseFloat(calculatorDisplay.textContent);
}


const main = () => {
    initializeNumberButtonsListeners();
    initializeClearButtonListener();
    initializeOperatorButtonsListeners();
    initializeEqualButtondListener();
}


main();