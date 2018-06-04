function convert(inch) {
    let feet = Number.parseInt(inch/12);
    let inches = inch % 12;
    console.log(`${feet}'-${inches}"`);
}

convert(11);