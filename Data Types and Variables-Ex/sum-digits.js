function solve(input) {
    var result = 0;
    input = input.toString();
    input = input.split('');
    for (let i = 0; i < input.length; i++) {
        const element = +input[i];
        result += element;
    }
    console.log(result);
}

solve(245678);