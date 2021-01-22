// problemSolve-1

function kilometerToMeter(kilometer) {

    var meter = 1000 * kilometer;           //hence, 1 kilometer = 1000 meter

    if (kilometer < 0) {
        return "Distance can't be negative. Enter a positive number"
    }

    return meter;

}


var result = kilometerToMeter(2);
console.log(result);


//problemSolve-2

function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {

    var totalPrice = watchQuantity * 50 + phoneQuantity * 100 + laptopQuantity * 500;

    if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        return "Quantity of watch, phone or laptop should be positive, Insert  positive values and try again"
    }

    else if (watchQuantity % 1 != 0 || phoneQuantity % 1 != 0 || laptopQuantity % 1 != 0) {
        return "Quantity of watch, phone or laptop should be interger, Insert  interger values and try again"

    }

    return totalPrice;
}

var result = budgetCalculator(4, 3, 2);
console.log(result);


//problemSolve-3

function hotelCost(stayingDays) {

    stayingDays = Math.round(stayingDays);             // half day count as a full day
    var totalCost = 0;


    if (stayingDays < 0) {
        return "Quantity of days can't be negative, insert a valid number and try again";
    }

    else if (stayingDays <= 10) {
        totalCost = stayingDays * 100;                  //hence, first 10days, per day cost 100
    }

    else if (stayingDays <= 20) {
        var firstPeriodCost = 10 * 100;
        var remainingDays = stayingDays - 10;
        var secondPeriodCost = remainingDays * 80;        //hence, after 10days, per day cost 80

        totalCost = firstPeriodCost + secondPeriodCost;
    }

    else {
        var firstPeriodCost = 10 * 100;
        var secondPeriodCost = 10 * 80;
        var remainingDays = stayingDays - 20;
        var thirdPeriodCost = remainingDays * 50;          //hence, staying more than 20days, per day cost 50

        totalCost = firstPeriodCost + secondPeriodCost + thirdPeriodCost;
    }

    return totalCost;
}

var result = hotelCost(20);
console.log(result);


//problemSolve-4

function megaFriend(names) {

    var longestLength = names[0].length;

    for (var i = 0; i < names.length; i++) {

        names[i] = names[i].trim();

        if (Math.max(names[i]) == "") {
            return "Please remove all empty strings from your array and try again";
        }

        else if (names[i].length > longestLength) {
            var longestLength = names[i].length;
            var biggerName = names[i];
        }
    }

    return biggerName;
}

var arrayNames = ["naim", "durjoy", "naima", "shoshe", "naimur", "junaed"];
var result = megaFriend(arrayNames);
console.log(result);