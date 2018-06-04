function palindrome(input) {
    let word = input.toString();
    let reverse = word.split("").reverse().join("");
    if (word == reverse)
        console.log('true');
    else
        console.log('false');
}

palindrome("asa");