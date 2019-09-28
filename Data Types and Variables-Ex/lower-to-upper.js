function solve(arr) {

    let letterToBeChecked = arr.charCodeAt(0);
    let result = '';
    letterToBeChecked >= 101 || 132 <= letterToBeChecked ? result = 'lower-case' : result = 'upper-case';
    console.log(result);
}
solve('L');
solve('g');
solve('r')
