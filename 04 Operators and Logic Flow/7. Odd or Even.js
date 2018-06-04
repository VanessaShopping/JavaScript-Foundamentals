function oddEven(num) {
    if (num % 1 !== 0){
        console.log('invalid');
    } else if (num % 2  === 0){
        console.log('even');
    }else{
        console.log('odd');
    }
}

oddEven(3.9);