function solve(input) {

    let workSpace = input
        .toString()
        .split('');

    let lastNumber = +workSpace.pop();
    let numbersWithWords = {
        0:'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: "ten"
    };
   
  console.log(numbersWithWords[lastNumber]);
   }


solve(5556)