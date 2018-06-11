function matchAllWords(input) {
    let inputArr = input.match(/\w+/g); // w+ матчва всички букви,цифри и долна черта
    console.log(inputArr.join("|"));
}

matchAllWords('_ (Underscores) are also word chars!');