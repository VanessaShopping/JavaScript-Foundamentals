// Обектите в JS са асоциативни масиви. Нещо подобно на Dictionary в C#. Речници. Съдържат ключ стойност

let obj = {name:"Pesho", Age:27, town:"Rousse"};
obj["site"] = "www.pesh.com"; // добавяне на елемент в обекта
delete obj["town"]; // изтрива/премахва елемент от обекта
console.log(obj["name"] + " " + obj["Age"] + " " + obj["site"]); // case sensitive. Достъпваме пак с [] като вътре пишем името на ключа

let keys = Object.keys(obj); // Взема ключовете от обекта и ги записва в масив
console.log(keys);

console.log(obj.hasOwnProperty("town")); // Проверява дали ключа съществува
console.log(obj.hasOwnProperty("name")); // Връща true или false

let values = Object.values(obj); // Взема стойностите от обекта и ги записва в масив
console.log(values);
console.log(values.includes("Pesho")); // Проверка дали стойноста съществува. Май важи само за масиви. В обекта хвърля грешка
                                       // Връща true или false
// Оbject.freeze(obj); // правим обекта read only.
// Object.seal(obj);  // подобно на freeze само ,че тук можем да променяме стойностите в обекта.

let str = JSON.stringify(obj); // Създава стриг/JSON от обекта.
obj = JSON.parse(str);    // Това прави обратното. От JSON прави обект

                        // Map - Object
// Разлики - Мап-а си пази реда на елементите. Обекта може да ги промени по азбучен ред
// Мап-а не може да се стрингнифайне , т.е. не можем да го направим JSON
// В Мап-а можем на позиция обект да сложим друг обект !?! тъпо
// В мап-а можем да въртим forOF loop като ни връща ключа и стойноста
    // for (let [k,v] of map) -> console.log(k + " " + v);
// Map дефениране -> let mapVariable = new Map();
// Добавяне на елемент -> mapVariable.set("key", "value")
// Ако пак добавим същия ключ ,стойноста ще се replace-не
// Изтриване на елемент mapVariable.delete("key");

// Object няма size. Map-a има . mapVariable.size
        // ДЕКЛАРИРАНЕ НА МАП
let mapDec = new Map([
    ["a", 1],
    ["b", "two"]
]);

                                    // SET
let names = new Set(); // Разликата с масива е ,че тук стойностите не може да се повтарят.
names.add('Pesho');
names.add('Maria');
names.add('Maria');
names.add('Pesho');
// names.delete('Pesho'); // case sensitive
console.log(names);

for (let name of names) {
    console.log(name);
}
// SET май няма индекси. реално пази само стойностите и за това не може да се повтарят.