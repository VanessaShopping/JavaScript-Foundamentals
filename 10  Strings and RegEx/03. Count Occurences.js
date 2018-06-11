function count(targetWord, str) {
    let counter = 0;
    let index = str.indexOf(targetWord); // indexOf is case sensitive
    while (index > -1){
        counter++;
        index = str.indexOf(targetWord, index+1);
    }
    return counter;
}

console.log(count('the', 'the , the, THE')); // case sensitive