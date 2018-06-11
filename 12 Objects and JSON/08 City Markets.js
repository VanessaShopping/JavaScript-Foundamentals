function cityMarkets(arr) {
    let map = new Map();

    for (let value of arr) {
        let [town, product, quantity, price] = value.split(/ -> | : /);
        if (!map.has(town)){
            map.set(town, new Map());
        }
        map.get(town).set(product, Number(quantity) * Number(price))
    }
    for (let [key,value] of map) {
        console.log(`Town - ${key}`);
        for (let [k,v] of value) {
            console.log(`$$$${k} : ${v}`);
        }
    }
}









/*
function solve(input){
    let towns = new Map();

    for (let el of input) {
        [town, product, sales] = el.split(' -> ');
        [quantity, pricePerOne] = sales.split(' : ');
        // console.log(`${town} ${product} ${quantity} ${pricePerOne}`);
        //check if town exists
        if(!towns.has(town)){
            towns.set(town, new Map());
            if(!towns.get(town).has(product)){
                towns.get(town).set(product, quantity*pricePerOne);
            }else{
                let currentSales = towns.get(town).get(product);
                towns.get(town).set(product, currentSales + (quantity*pricePerOne));
            }
        }else{
            if(!towns.get(town).has(product)){
                towns.get(town).set(product, quantity*pricePerOne);
            }else{
                let currentSales = towns.get(town).get(product);
                towns.get(town).set(product, currentSales + (quantity*pricePerOne));
            }
        }
    }
    for (let map of towns) {
        console.log(`Town - ${map[0]}`);
        for (let [product, sales] of map[1]) {
            console.log(`$$$${product} : ${sales}`)
        }
    }
}
/!*
solve([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3',
'Sofia -> Laptops HP -> 10 : 10'
]);*!/
*/
