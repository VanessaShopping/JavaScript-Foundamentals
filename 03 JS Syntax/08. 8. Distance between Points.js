function dbp(x1,y1,x2,y2) {
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1-y2);
    let c = a**2 + b**2;
    console.log(Math.sqrt(c));

}

dbp(2,4,5,0);