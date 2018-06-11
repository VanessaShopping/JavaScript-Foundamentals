function extract(text) {
    let result = [];
    let startIndex  = text.indexOf('(');
    let endIndex = text.indexOf(')', startIndex + 1);


    while (startIndex > -1 && endIndex > -1){
        result.push(text.substring(startIndex + 1, endIndex));
        startIndex = text.indexOf('(', startIndex + 1);
        endIndex = text.indexOf(')', endIndex + 1);
    }

    console.log(result.join(", "));
}

extract("Rakiya (Bulgarian Brandy) is self-made liquor (alchohol)");