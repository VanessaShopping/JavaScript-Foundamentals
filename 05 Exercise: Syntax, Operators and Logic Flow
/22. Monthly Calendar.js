function calendar([day, month, year]) {             //  y   m  d     y   m  d
    let inputDate = new Date(year, month-1, day+1); // 2004 03 13   2005 01 31
    let prevMonth = new Date(year, month-1, 0); //     2004 02 29   2004 12 31
    let currentDate = day;
    let daysInPrevMonth = prevMonth.getUTCDate() + 1; // 28 29 30 31
    let dayNum = inputDate.getDay();
    console.log(dayNum);

}

calendar([13, 3, 2004]);
calendar([31, 1, 2005]);
calendar([26, 5, 2018]);

function myDate() {
    var a = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[A.getDay()];
    document.getElementById("myId").innerHTML = r;
}
