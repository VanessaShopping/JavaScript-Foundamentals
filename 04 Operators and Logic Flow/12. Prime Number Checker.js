function primeNumberChecker(n) {

    let isPrime = true;

    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i == 0) {
            isPrime = false;
        }
    }

    return isPrime && n > 1;
}

console.log(primeNumberChecker(['3']));