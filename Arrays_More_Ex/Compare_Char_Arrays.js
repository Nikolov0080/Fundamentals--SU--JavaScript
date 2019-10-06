function solve(input) {

    let wordOne = input[0].split(' ')
    let wordTwo = input[1].split(' ');

    let wordOneToString = '';
    let wordTwoToString = '';
    for (let i = 0; i < wordOne.length; i++) {
        wordOneToString += wordOne[i];
    }
    for (let i = 0; i < wordTwo.length; i++) {
        wordTwoToString += wordTwo[i];
    }
    let first = '';
    let second = '';

    if (wordTwoToString.length > wordOneToString.length) {
        first = wordTwoToString;
        second = wordOneToString;
    } else {
        first = wordOneToString;
        second = wordTwoToString;
    }

    let letterOne = wordOneToString.charCodeAt(0);
    let letterTwo = wordTwoToString.charCodeAt(0);

    if (letterOne > letterTwo) {
        first = wordTwoToString;
        second = wordOneToString;
    } else {
        first = wordOneToString;
        second = wordTwoToString;
    }
   
    console.log(first + '\n' + second);
}
solve(['a n', 'a n n i e']);