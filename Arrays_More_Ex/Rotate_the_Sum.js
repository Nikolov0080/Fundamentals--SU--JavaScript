function solve(input) {
    
    arr = input[0].split(' ').map(a => Number(a));
    rotates = Number(input[1]);
    let allArrays = [];

    for (let i = 0; i < rotates; i++) {
        let sum = [];
        let num = arr.pop();
        arr.unshift(num);

        for (let k = 0; k < arr.length; k++) {
            const element = arr[k];
            sum.push(element);
        }
        allArrays.push(sum);

    }
    let result = allArrays[0];
    if (allArrays.length > 1) {
        for (let z = 1; z < allArrays.length; z++) {
            for (let j = 0; j < allArrays[z].length; j++) {
                let item = allArrays[z][j]
                result[j] += item;

            }

        }

        console.log(result.join(' '));
    } else {
        let imDumb = allArrays.join(' ');
        let imVeryVeryDumb = imDumb.split(',').join(' ');
        console.log(imVeryVeryDumb);
    }

}
solve(['3 2 4 -1', '2',]);
//solve([1, 2, 3, 4, 5], 3);
//solve([1, 2, 3], 1)