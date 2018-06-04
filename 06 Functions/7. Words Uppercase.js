function wordsUppercase(input) {
    let exp = input.toString().toUpperCase();
    let splitExp = exp.split(/\W+/).filter(x => x);
    let result = "";
    for (let v in splitExp)
        result += splitExp[v] + ", ";
    let l = result.length;
    console.log(result.slice(0, l-2));
}

wordsUppercase('Hi, how are you?');