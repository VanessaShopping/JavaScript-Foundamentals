function usr(input) {
    let result = [];
    for (let mail of input) {
        let [username, rest] = mail.split('@'); // username, rest са стрингове
        let c ="";
        rest = rest.split(".");

        for (let w of rest) {
            c += w[0];
        }
        result.push(username + "." + c);
    }
    console.log(result.join(", "));
}

usr(["pesho@abv.bg", "gosho@gmail.bg.net.org"]);