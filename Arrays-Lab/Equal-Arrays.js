function solve(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = +arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = +arr2[i];

    }

    for (let i = 0; i < arr1.length; i++) {
        let areEqual = true;

        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else if (!areEqual) {
             console.log(`Arrays are identical. Sum: ${arr1.reduce((a, b) => a + b)}`);
     
        }

    }
}
// solve([10, 20, 30], [10, 20, 30]);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
