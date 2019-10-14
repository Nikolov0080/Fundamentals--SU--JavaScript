function solve(a, b) {
    let aToAscii = ascii(a);
    let bToAscii = ascii(b);
    let result = new Array;
    let start = Math.min(aToAscii, bToAscii);
    let end = Math.max(aToAscii, bToAscii);
    function ascii(char) {
        return char.charCodeAt();
    }

    for (let i = start+1; i < end; i++) {
       result.push(String.fromCharCode(i))
        
    }

    console.log(result.join(' '));
   
}
solve('C', '#');