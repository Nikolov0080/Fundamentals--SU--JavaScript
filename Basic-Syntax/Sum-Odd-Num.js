function solve(n) {
    var number = n;
    let iter = 0;
    let sum = 0;
    while (number > 0) {

        if (iter % 2 !== 0) {
            console.log(iter);
            number--;
            sum+=iter;
        }
        iter++;
    }
    console.log(`Sum: ${sum}`)
}
solve(5);