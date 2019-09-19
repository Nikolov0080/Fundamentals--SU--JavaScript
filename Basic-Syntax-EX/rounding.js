function solve(num, point) {

    let number = parseFloat(num);
    let dot = point;

    let test = number.toString()

    if (test.length-1 == point) {
        console.log(number);
        return;
    }
    console.log(number.toFixed(dot));
}

solve(10.5,3);