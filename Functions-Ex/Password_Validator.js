function solve(password) {

    // boolean checkers.
    let passwordLength = length(password);
    let passwordNumberAndLetters = lettersAndNumbersCheck(password);
    let minDigits = minimumDigits(password);

    if (passwordLength &&
        passwordNumberAndLetters &&
        minDigits) {
        console.log('Password is valid');
    };

    // password tests.


    function length(text) { // length test.
        if (text.length >= 6 && 10 >= text.length) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function lettersAndNumbersCheck(text) { // letters and numbers test.
        for (let i = 0; i < text.length; i++) {
            let valueOfLetter = text.charCodeAt(i);
            if ((valueOfLetter >= 48 && 57 >= valueOfLetter) ||
                (valueOfLetter >= 97 && 122 >= valueOfLetter) ||
                (valueOfLetter >= 65 && 90 >= valueOfLetter)) {
                continue;
            }
            else {
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        return true;
    }



    function minimumDigits(text) {

        let digitCounter = 0;

        for (let i = 0; i < text.length; i++) {
            const element = text.charCodeAt(i);
            if ((+element >= 48 && 57 >= +element)) {
                digitCounter++;
            }

          
        }

        if (digitCounter >= 2) {
            return true;
        } else {
            console.log('Password must have at least 2 digits');
            return false;
        }
    }

}
solve('l3o323ff');