function filterByAge(bottles, quantity) {
    let boxses = bottles / quantity;
    return Math.ceil(boxses);
}

console.log(filterByAge(20,5))