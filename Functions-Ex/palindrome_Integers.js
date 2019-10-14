function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let result = isPalindrome(arr[i]);
        console.log(result)
    }
    function isPalindrome(item) {
        let rotated = +item.toString().split('').reverse().join('');
        if (item == rotated) {
            return true;
        } else {
            return false;
        }
    }
}
solve([123, 323, 421, 121]);