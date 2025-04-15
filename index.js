let calculatorOperation = { 
    operator: '',
    numberOne: 0,
    numberTwo: 0
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
    } else if (operator === '*') {
        return multiply(numberOne, numberTwo);
    } else {
        return divide(numberOne, numberTwo);
    }
}


const main = () => {

}

main();