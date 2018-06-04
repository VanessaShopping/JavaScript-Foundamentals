function assingProp([opt1, val1, opt2, val2, opt3, val3]) {
    console.log(`{ ${opt1}: '${val1}', ${opt2}: '${val2}', ${opt3}: '${val3}' }`);
}

function assignProperties(arr) {
    let object = {};
    object[arr[0]] = arr[1];
    object[arr[2]] = arr[3];
    object[arr[4]] = arr[5];

    console.log(object);
}