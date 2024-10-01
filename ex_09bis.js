function doOperation(operation) {
		const[num1, operator, num2] = operation.split(' ');
    const a = parseFloat(num1), b = parseFloat(num2);

    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : (console.log("Can't divide by 0"), null);
        default: return null;
    }
}
    
