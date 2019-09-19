function solve(num) {

    var result = '';

    if (num % 2 == 0) {
        result = 'The number is divisible by 2';
    }
    if (num % 3 == 0) {
        result = 'The number is divisible by 3';
    }
    if (num % 6 == 0) {
        result = 'The number is divisible by 6';
    }
    if (num % 7 == 0) {
        result = 'The number is divisible by 7';
    }
    if (num % 10 == 0) {
        result = 'The number is divisible by 10';
    }

    if (result == '') {
        result = 'Not divisible';

    }

    console.log(result);
}

solve(30);
solve(15);
solve(12);
solve(1643);
