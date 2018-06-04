function delimiter(input) {
    let delimiter  = input.splice(-1).toString();
        console.log(input.join(delimiter));
}



delimiter(["One", "Two", "Three", "Four", "Five", "-"])