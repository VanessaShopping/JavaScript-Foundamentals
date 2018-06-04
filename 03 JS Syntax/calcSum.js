for(let i = 1; i <=10; i++){
    document.writeln(i);
}

for (let i = 1; i <=10; i++){
    document.write(i);
}



function calcSum() {
    let num1 = document.getElementsByName('num1')[0].value;
    let num2 = document.getElementsByName('num2')[0].value;
    let sum = Number(num1) + Number(num2);
    document.getElementsByName('sum1')[0].value = sum;
}