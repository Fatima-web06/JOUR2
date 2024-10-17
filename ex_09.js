function splitOperation(operation) {
   
    const parts = operation.split(" ");
    const firstNumber = parseInt(parts[0], 10);
    const operator = parts[1];
    const secondNumber = parseInt(parts[2], 10);
    
    return [firstNumber, operator, secondNumber];
}
