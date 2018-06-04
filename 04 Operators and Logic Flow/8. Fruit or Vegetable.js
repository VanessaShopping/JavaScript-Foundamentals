function word(word) {
    if (word == "banana" || word == "apple" || word == "kiwi" || word == "cherry" || word == "lemon" || word == "grapes" || word == "peach") {
        console.log("fruit");
    }
    else if (word == "tomato" || word == "cucumber" || word == "pepper" || word == "onion" || word == "parsley" || word == "garlic")
    {
        console.log("vegetable");
    }
    else
    {
        console.log("unknown");
    }
}

word('apple');
word('pepper');
word('banica');