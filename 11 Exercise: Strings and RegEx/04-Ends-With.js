function check(mainString, substring) {
    console.log(mainString.substr(-substring.length) === substring);
}
// check('The new iPhone has no headphones jack.', 'o headphones jack.');
// check('This is Houston, we have…', 'We have…');

