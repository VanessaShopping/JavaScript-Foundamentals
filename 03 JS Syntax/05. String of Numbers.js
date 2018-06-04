function strOfNum(num) {
    let str = "";

    for (let i = 1; i <= num; i++){
        str = str + i.toString();
    }
    console.log(str);
}

strOfNum(7);