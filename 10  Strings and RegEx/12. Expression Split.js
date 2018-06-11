function expSplit(expression) {
    let elements = expression.split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}

expSplit('let sum = 4 * 4,b = "wow";');