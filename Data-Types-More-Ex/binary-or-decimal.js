function solve(arr) {
    function binaryToDecimal(string) {
        let decimal = +0;
        let bits = +1;
        for(let i = 0; i < string.length; i++) {
            let currNum = +(string[string.length - i - 1]);
            if(currNum === 1) {
                decimal += bits;
            }
            bits *= 2;
        }
        console.log(decimal);
    }
    arr= arr.toString();
    let result = binaryToDecimal(arr);

}
solve(11110000);