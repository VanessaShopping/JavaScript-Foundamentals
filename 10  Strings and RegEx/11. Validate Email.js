function validateEmail(email) {
    let regex = /^[a-zA-Z-0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/gim
    let secondRegEx = new RegExp('^[a-zA-Z-0-9]+@[a-zA-Z]+\\.[a-zA-Z]+$', 'gim');

    if (regex.test(email))
        console.log('Valid');
    else
        console.log('Invalid');

/*
    if (secondRegEx.test(email))
        console.log('Valid');
    else
        console.log('Invalid');
*/


}


validateEmail('valid@email.com');
validateEmail('invalid@email123.com');