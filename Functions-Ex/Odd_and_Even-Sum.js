function solve(input) {

    function Odd(numbers) {
        let result = 0;
        numbers = numbers.toString();
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            if (element % 2 !== 0) {
                result += +element;
            };
        }
        return result;
    }

    function Even(numbers) {
        let result = 0;
        numbers = numbers.toString();
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            if (element % 2 == 0) {
                result += +element;
            };
        }
        return result;
    }
console.log(`Odd sum = ${Odd(input)}, Even sum = ${Even(input)}`);
    
}
solve(3495892137259234);