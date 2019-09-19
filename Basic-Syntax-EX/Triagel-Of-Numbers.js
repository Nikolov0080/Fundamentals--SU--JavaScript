function solve(n) {
    for (let i = 0; i <= n; i++) {
        var result = '';
        for (let j = 0; j < i; j++) {
            result += i + ' ';
        }
        console.log(result);
    }
}

solve(4)