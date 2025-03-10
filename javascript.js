function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let a = '';
let b = '';
let operatorSymbol = '';

function operate(operator, a, b) {
    if (operator == '+') {
        return add(+a, +b);
    }
    else if (operator == '-') {
        return subtract(+a, +b);
    }
    else if (operator == '*') {
        return multiply(+a, +b);
    }
    else if (operator == '/' && +b == 0) {
        return "don't divide by zero";
    }
    else if (operator == '/') {
        return divide(+a, +b);
    }
}

function clearDisplay() {
    const display = document.querySelector("#display");
    display.textContent = '';
}

// Number buttons

function pressDigit(digit) {
    const display = document.querySelector("#display");

    if (operatorSymbol == '' && a.length < 10) {
        a += digit;
        display.textContent = a;
    }
    else if (operatorSymbol != '' && b.length < 10) {
        b += digit;
        display.textContent = b;
    }
}

for (let i = 0; i < 10; i++) {
    let button = document.querySelector(`#num${i}`);
    button.addEventListener("click", function num(e) {pressDigit(i)});
}

// Operator buttons

function chainOperator() {
    const display = document.querySelector("#display");
    a = operate(operatorSymbol, a, b);
    display.textContent = a;
    b = '';
}

function pressOperator(operator) {
    if (a == '') {
        return;
    }
    if (operatorSymbol != '' && b != '') {
        chainOperator();
    }
    operatorSymbol = operator;
}

const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

addButton.addEventListener("click", function func(e) {pressOperator('+')});
subtractButton.addEventListener("click", function func(e) {pressOperator('-')});
multiplyButton.addEventListener("click", function func(e) {pressOperator('*')});
divideButton.addEventListener("click", function func(e) {pressOperator('/')});

// Enter button

function pressEnter() {
    if (a == '' || b == '' || operatorSymbol == '') {
        return;
    }

    const display = document.querySelector("#display");
    display.textContent = operate(operatorSymbol, a, b);

    a = '';
    operatorSymbol = '';
    b = '';
}

const equalButton = document.querySelector("#enter");
equalButton.addEventListener("click", function enter(e) {pressEnter()});

// Clear calculator

function pressClear() {
    a = '';
    b = '';
    operatorSymbol = '';

    const display = document.querySelector("#display");
    display.textContent = '';
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function clear(e) {pressClear()});