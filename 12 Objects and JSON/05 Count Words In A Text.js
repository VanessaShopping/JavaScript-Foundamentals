function countWords([text]) {
    let regex = /[a-zA-Z0-9_]+/g;
   // let regex = /[\w]+/g;
    let matches = text.match(regex); // Обект-Масив
    // console.log(matches);
    let words = {};

    for (let match of matches) {
        if(words.hasOwnProperty(match)){
            words[match]++;
        }else{
            words[match] =1;
        }
    }
    console.log(JSON.stringify(words));
}
// countWords(['Far too slow, you\'re far too slow.']);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);

