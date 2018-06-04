function everyNElement(input) {
    let step  = input[input.length - 1];
    for (let i = 0; i < input.length - 1; i+=step)
        console.log(input[i]);
}

everyNElement([5,20,31,4,20,2]);


function printEveryNthElementFromAnArray(input) {
    let step = Number(input.pop());

    input.filter((element, index) => index % step == 0).forEach(element => console.log(element));
}

printEveryNthElementFromAnArray([5,20,31,4,20,2]);