function leapYear(year) {
    let isLeap = "no";
    if ((year % 4 == 0 && year % 100 !==0) || year % 400 == 0) {
        isLeap = "yes";
    }
    return isLeap;
}
console.log(leapYear(1900));