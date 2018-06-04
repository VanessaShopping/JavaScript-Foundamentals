function modifyAverage(number) {
    function getAverage(number) {
        let sum = 0;
        sum += (number - 1) % 9 + 1;

        return sum / number.length;
    }

    let average = getAverage(number);

    let addNine = x => x + "9";

    while(average <= 5) {
        number = addNine(number);
        average = getAverage(number);
    }

    console.log(number);
}

modifyAverage(101);