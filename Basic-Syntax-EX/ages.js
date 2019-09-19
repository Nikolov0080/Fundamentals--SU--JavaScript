function solve(input) {

    if (input >= 0 && 2 >= input) {
        console.log('baby');
    } else if (input >= 3 && 13 >= input) {
        console.log('child');

    } else if (input >= 14 && 19 >= input) {
        console.log('teenager');

    } else if (input >= 20 && 65 >= input) {
        console.log('adult');

    } else if (input>= 65 ) {
        console.log('elder');

    }

}

solve(20);
solve(1);
solve(100);
