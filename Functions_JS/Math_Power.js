function solve(item, count) {
    var coffee = 1.5, water = 1, coke = 1.4, snacks = 2;
    let result = 0;
    if (item == 'coffee') {
        result = coffee * count;
    } else if (item == 'water') {
        result = water * count;
    } else if (item == 'coke') {
        result = coke * count;
    } else if (item == 'snacks') {
        result = snacks * count;
    }
    console.log(result);
}
solve('water', 5);