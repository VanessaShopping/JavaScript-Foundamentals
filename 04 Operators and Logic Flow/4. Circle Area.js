function area(r) {
    let area = Math.PI * (r**2);
    let roundedArea = area.toFixed(2);
    console.log(area);
    console.log(roundedArea);
}

area(5);