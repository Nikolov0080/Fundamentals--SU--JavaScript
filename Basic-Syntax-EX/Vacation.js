function solve(groupOfPeople, typeOfPeople, dayOfTheWeek) {

    let price = 0;
    let people = groupOfPeople;
    let totalPrice = 0;

    if (typeOfPeople == "Business") {
        if (dayOfTheWeek == "Friday") {
            price = 10.90;
        } else if (dayOfTheWeek == "Saturday") {
            price = 15.60;
        } else if (dayOfTheWeek == "Sunday") {
            price = 16;
        }
        if (people >= 100) {
            people -= 10;
        }
        totalPrice = people * price;
    } else if (typeOfPeople == "Students") {

        if (dayOfTheWeek == "Friday") {
            price = 8.45
        } else if (dayOfTheWeek == "Saturday") {
            price = 9.80
        } else if (dayOfTheWeek == "Sunday") {
            price = 10.46
        }
        totalPrice = price * people;
        if (people >= 30) {
            totalPrice = (totalPrice * 0.85);
        }

    } else if (typeOfPeople == "Regular") {

        if (dayOfTheWeek == "Friday") {
            price = 15
        } else if (dayOfTheWeek == "Saturday") {
            price = 20
        } else if (dayOfTheWeek == "Sunday") {
            price = 22.50
        }
        totalPrice = people * price;
        if (people >= 10 && 20 >= people) {
            totalPrice = (totalPrice * 0.95);
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");