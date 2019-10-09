function solve(one, two, three) {
    let arr = [one, two, three];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            counter++;
        }
    }
    result = '';
    counter % 2 !== 0 ? result = 'Negative' : result = "Positive"
    console.log(result);
}
solve(5, 12, -15);