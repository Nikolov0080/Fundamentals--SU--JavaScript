function solve(radius, height) {

    // V
    let volume = Math.PI *
        (radius * radius) *
        height / 3;

    let s = Math.sqrt((Math.pow(radius, 2)) +
        (Math.pow(height, 2)));

    let area = (Math.PI * Math.pow(radius, 2)) + Math.PI * radius * s;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
solve(3, 5);