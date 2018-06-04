function biggestElement(input) {
    let array = input.join(' ')
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a)
        .slice(0, 1);

    console.log(array.toString());
}

biggestElement([20, 50, 10], [8, 33, 145]);