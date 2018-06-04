function lastMonth([d, m, y]) {
    let date = new Date(y, m-1, d-d+1);
    console.log(date.getUTCDate());
}

lastMonth([13,12,2004]);