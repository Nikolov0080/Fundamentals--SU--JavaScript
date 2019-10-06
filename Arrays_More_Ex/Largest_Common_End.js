function solve(input) {
    let equalArray = new Array;
    let shortest = Array;
    let longest = Array

    let arr1 = input[0].split(' ');
    let arr2 = input[1].split(' ');

    if (arr1.length > arr2.length) {
        shortest = arr2;
        longest = arr1;
    } else {
        shortest = arr1;
        longest = arr2;
    }

    calk(shortest, longest);

    if (equalArray.length <= 0) {
        shortest = shortest.reverse();
        longest = longest.reverse();

        calk(shortest, longest);
    }

    function calk(shortest, longest) {

        for (let i = 0; i < shortest.length; i++) {
            for (let j = 0; j < longest.length; j++) {
                if (shortest[i] == longest[j]) {

                    let indexCheckFirst = shortest.indexOf(shortest[i]);
                    let indexCheckSecond = longest.indexOf(longest[j]);

                    if (indexCheckFirst == indexCheckSecond) {
                        equalArray.push(shortest[i]);
                    }

                }

            }

        }
        return equalArray;
    }

    for (let i = 0; i < equalArray.length; i++) {
        if (equalArray[i] == equalArray[i + 1]) {
            equalArray.splice(equalArray[i], 1);
        }
    }

    console.log(equalArray.length);
}
// solve([    'hi php java xml csharp sql html css js', 'nakov java sql html css js']);
solve(['hi php java csharp sql html css js',
    'hi php java js softuni nakov java learn'])
