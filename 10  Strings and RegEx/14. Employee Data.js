function parseEmployeeData(input) {
        // let reg = /^([A-Z][a-z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/g;
           let reg = /^([A-Z][a-z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let str of input) {
        let exec = reg.exec(str);
        if (exec){
            console.log(`Name: ${exec[1]}\n` +
                `Position: ${exec[3]}\n` +
                `Salary: ${exec[2]}`
            );
        }
    }
}
