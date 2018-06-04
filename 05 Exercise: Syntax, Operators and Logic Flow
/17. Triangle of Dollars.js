function triangle(n) {
/*
    for (let row = 1; row <= n; row++){
        let line = '';
        for (let col = 1; col <= row; col++){
            line += '$';
        }
        console.log(line);
    }
*/

/*
    for (let row = 1; row <= n; row++){
        console.log(new Array(row+1).join('$'));
    }
*/

    for (let row = 1; row <= n; row++){
        console.log('$'.repeat(row));
    }
}

triangle(3);
