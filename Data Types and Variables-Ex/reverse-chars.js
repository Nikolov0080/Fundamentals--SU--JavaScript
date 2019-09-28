function solve(a, b, c) {
    let array1 =
     ((a.toString()) +
     (b.toString()) + 
     (c.toString()))
    .split('')
    .reverse()
    .join(' ');
    console.log(array1);
}
solve('A', 'B', 'C');