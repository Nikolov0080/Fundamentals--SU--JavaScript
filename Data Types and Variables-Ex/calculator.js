function solve(num, operand, num1) {
    let result = 0;
    switch (operand) {
        case '+':
            result = num + num1;
            break;
        case '-':
            result = num - num1;
            break;
        case '/':
            result = num / num1;
            break;
        case '*':
            result = num * num1;
            break;
    }
console.log(result.toFixed(2));
}
solve(5, '+', 10);