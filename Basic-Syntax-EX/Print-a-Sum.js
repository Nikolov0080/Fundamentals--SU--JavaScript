function solve(start, end) {
    let result = 0;
    let lineOfResults = ''
    for (let i = start; i <= end; i++) {
        result += i;
        lineOfResults += i + ' ';
    }
    console.log(lineOfResults);
    console.log(`Sum: ${result}`);
}

solve(5, 10)