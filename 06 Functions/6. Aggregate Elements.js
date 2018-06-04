function aggElements(input) {
    let sum = input.reduce((a, b) => a + b, 0);
    let inverseValue = 0;
    let concatElements = "";
    for (let v in input){
        inverseValue += 1 / input[v];
        concatElements += `${input[v]}`;
    }
    console.log(sum);
    console.log(inverseValue);
    console.log(concatElements);
}

aggElements([2,4,8,16]);