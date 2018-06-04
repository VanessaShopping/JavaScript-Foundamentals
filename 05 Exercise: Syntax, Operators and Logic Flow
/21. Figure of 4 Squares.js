function fig(n) {
    let dashPlusLine = '+' + "-".repeat(n-2) + '+' + "-".repeat(n-2) + "+";
    let secondLine = '|' + (' '.repeat(n-2)) + '|' + (' '.repeat(n-2)) + '|';
    let row = n;
    if (n % 2 == 0) row = n - 1;
    
    for (let i = 1; i <= row; i++){
        if (i == 1 || i == row || i == (Math.ceil(n/2)))
            console.log(dashPlusLine);
        else
            console.log(secondLine);
    }
    
}

fig(4);
fig(9);