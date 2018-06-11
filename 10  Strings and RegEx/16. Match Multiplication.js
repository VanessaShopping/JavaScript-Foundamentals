function matchMultiplications(str) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+\.\d+)/g;
    console.log(str.replace(regex, (all, g1, g2) => +g1 * +g2));
}