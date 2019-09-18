function solve(num) {

    let result;
    if (num >= 13 && num <= 0) {
        console.log('Error!');
        return;
    }

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    result = months[num - 1];

    if (result == undefined) {
        result = "Error!"
    }
    console.log(result);

}

solve(2);