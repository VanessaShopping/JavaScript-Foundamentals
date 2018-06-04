function distance([v1, v2, t]) {
    let s1 = v1 * (t/3600);
    let s2 = v2 * (t/3600);
    let dist = Math.abs(s1-s2) * 1000;
    console.log(dist);

}

distance([0,60,3600]);
distance([11,10,120]);