function extractDates(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})\b/g;
    let exec;
    let dates = [];

    for (let str of input) {
        while (exec = regex.exec(str)){
            dates.push(`${exec[0]} (Day: ${exec[1]}, Month: ${exec[2]}, Year: ${exec[3]})`);
        }
    }
    console.log(dates.join("\n"));
}

extractDates([`I am born on 30-Dec-1994`,
                `This is not date: 512-Jan-1233`,
                `My father is born on the 29-Jul-1955.`
]);