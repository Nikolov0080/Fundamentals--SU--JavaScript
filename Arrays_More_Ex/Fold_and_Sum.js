function solve(input) {
    input = input.toString().split(' ').map(a => Number(a))

    let midNumbers = [];
    let leftNumbers = [];
    let rightNumbers = [];
    let toAdd = new Array;
    for (let i = 0; i <= input.length / 4; i++) {
        +rightNumbers.push(input.pop());
        +leftNumbers.push(input.shift());

        midNumbers = input;
    }
    leftNumbers = leftNumbers.reverse()
    toAdd = (leftNumbers.concat(rightNumbers));

    let result = midNumbers;
for (let i = 0; i < toAdd.length; i++) {
    result[i] += +toAdd[i];
    
}
   console.log(result.join(' '));
   
}
//60/100
solve(['4 3 -1 2 5 0 1 9 8 6 7 -2']);