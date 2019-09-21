function solve(n1, n2, n3) {

    let arr = [n1, n2, n3];
    let result = arr
        .sort()
        .reverse();

    for (const da of result) {
      console.log(da)
    }
}

solve(2, 1, 3);