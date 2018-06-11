let obj = {
    a: {price: 30},
    c: {price: 20},
    b: {price: 25}
}

let keys = Object.keys(obj);
console.log(keys + " Несортирани");

    keys.sort((key1, key2) =>{
        return obj[key2].price - obj[key1].price
    })

console.log(keys + " Сортирани");

for (let e in obj) { // Обект можем да въртим само по ключове
    console.log(e); // e = ключа в обекта. Този ключ държи друг обект с ключ price и стойност 30,20,25
    // Първия ключ = a. Този ключ а е обект. В него има още един ключ price със стойност 30,20,25
    console.log(obj[e]); // Достъпваме от обекта стойноста на ключа , който пак е обект
    console.log(obj[e].price); // Достъпваме от обекта стойноста на ключа , който пак е обект
                                // НО ако напишем .price което е ключа във вложения/вътрешния обект достъпваме  стойноста
                                // Която стойност в случея е число, но може да е пак обект или нещо друго
}

let arr = [{a:"one", b:"two"}, {c:"three", d:"four"}, "Treti element"];
for (let element in arr) {
    console.log("Element from forOf   " + element); // връща обектите в масива
    // Като ползваме IN връща индексите
    // Ако ползваме  OF връща стойностите, но само ако не са обекти. Ако е обект връща думата Object object и нищо не можем да направим
 }
let arrTwo = [111,222,333, {a: "objA", b: "objB"}];
for (let value of arrTwo) {
    console.log("Връща стойностите от масива" + value);
}
        console.log("")
for (let key in arrTwo) {
    console.log("Връща ключовете от масива " + key);
    console.log("Достъпваме с ключовете техните стойности " + arrTwo[key]);
    console.log("Така достъпваме от масива на иденкс 3 обект, на който му вземаме стойноста в ключа a " + arrTwo[3]["a"]);
}

console.log(arr[0]); // Връща първия елемент от масива. В случея е обект
console.log(arr[0].a); // Връща първия елемент от масива и от този масив взема стойноста на ключа "а"