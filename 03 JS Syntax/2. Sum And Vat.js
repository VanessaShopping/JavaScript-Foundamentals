function sumVat(input) {
    let sum = 0;
    for (let num of input){
        sum = sum + num;
    }

    console.log(`sum = ${sum}`);
    console.log('VAT =' + sum * 0.2);
    console.log(`total = ${sum * 1.2}`);
}

sumVat([3, 2.3, 3.4]);