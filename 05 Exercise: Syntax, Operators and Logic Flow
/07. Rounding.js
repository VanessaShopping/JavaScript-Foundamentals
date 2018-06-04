function round([number , precision]) {
    if(precision>=15){
        precision = 15;
    }
    let num = Number(number).toFixed(precision);
    console.log(Number(num));
}

round([10.1, 13]);



function rounding([number, precision]) {
    precision = Number(precision);
    if(precision > 15) {
        precision = 15;
    }

    number = Number(number).toFixed(precision);
    console.log(Number(number));
}

rounding([10.1,15]);