function bill(input) {
    let products = input.filter((e, i) => i % 2 === 0).join(", ");
    let sums = input.filter((e, i) => i % 2 === 1).reduce((a,b) => +a + +b); // Понеже са стрингове добавяме един + пред всеки елемент да стане число

    console.log(`You purchased ${products} for a total sum of ${sums}`);
}

bill(["Zagorka" , "2.65", "Kameniza", "3.25"]);