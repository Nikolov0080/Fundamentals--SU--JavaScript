function solve(input) {
    input = +input;
    var bWhite = 0;
    var color = '';
    console.log('<div class="chessboard">');
    for (let i = 0; i < input; i++) {
        console.log('<div>');
        for (let k = 0; k < input; k++) {
            if (bWhite % 2 !== 0) {
               color = '"white"';
            }else{
               color = '"black"';
            }
            console.log(`<span class=${color}></span>`);
            bWhite++;
        }
        console.log('</div>');
    }
    console.log('</div>')
}
solve(3);