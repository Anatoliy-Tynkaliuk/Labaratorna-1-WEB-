

function showAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'none';
}



/*
Реалізувати калькулятор.
*/

//START CODE


function calculate() {
    const input = document.getElementById('expression').value.trim();

    if (!input) {
        document.getElementById('result').innerText = 'Результат: ';
        return;
    }

    if (!is_valid_expression(input)) {
        document.getElementById('result').innerText = 'Некоректний вираз!';
        return;
    }

    try {
        const result = evaluateExpression(input);
        document.getElementById('result').innerText = `Результат: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Помилка обчислення!';
    }
}

function is_valid_expression(input) {
    const allowedChars = "0123456789+-*/(). ";
    
    for (let char of input) {
        if (!allowedChars.includes(char)) {
            return false;
        }
    }
    return true;
}

function tokenize(expression) {
    let tokens = [];
    let numberBuffer = "";
    const operators = "+-*/()";

    for (const char of expression) {
        if (char >= '0' && char <= '9') { 
            numberBuffer += char; 
        } else if (operators.includes(char)) { 
            if (numberBuffer) {
                tokens.push(numberBuffer); 
                numberBuffer = ""; 
            }
            tokens.push(char); 
        } else if (char !== ' ') { 
            throw new Error("Некоректний вираз");
        }
    }

    if (numberBuffer) {
        tokens.push(numberBuffer);
    }

    if (!tokens.length) {
        throw new Error("Некоректний вираз");
    }

    return tokens;
}



function evaluateExpression(expression) {
    const tokens = tokenize(expression);
  
    let outputQueue = [];
    let operatorStack = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    for (const token of tokens) {
        if (!isNaN(token)) {
            outputQueue.push(Number(token));
        } else if (token in precedence) {
            while (
                operatorStack.length &&
                precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
            ) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        } else if (token === '(') {
            operatorStack.push(token);
        } else if (token === ')') {
            while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.pop();
        }
    }

    while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
    }

    let stack = [];
    for (const token of outputQueue) {
        if (!isNaN(token)) {
            stack.push(token);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else if (token === '/') stack.push(a / b);
        }
    }

    return stack.pop();
}


//END CODE
