function solve(str) {
    let strToArr = str.split('');

    let result = strToArr
        .reverse()
        .join('');

        console.log(result);
}

solve('da')