function composeTag([fileLocaton, alternateText]) {
    console.log(`<img src="${fileLocaton}" alt="${alternateText}">`);
}

composeTag(['s.gif', "alttxt"]);