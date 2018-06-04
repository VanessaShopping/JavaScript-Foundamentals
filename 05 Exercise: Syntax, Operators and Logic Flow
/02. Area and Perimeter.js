function areaAndPerimeter(sideA, sideB) {
    let a = sideA;
    let b = sideB;
    let area = a * b;
    let perimeter = 2*a + 2*b;
    console.log(`${area}\n${perimeter}`);
}

areaAndPerimeter(1,3);