function multyTable(n) {

    let tbl = ` `;
    tbl+= `<table border="1">\n`;
    tbl+= `<tr><th>x</th>`;
    
        for (let i = 1; i <= n; i++)
            tbl += `<th>${i}</th>`;
        tbl += `</tr>\n`;

    for (let row = 1; row <= n; row++){
        tbl += `<tr>`;
        let num = row;
        tbl += `<th>${num}</th>`;
        for (let cow = 1; cow <= n; cow++){
            tbl += `<td>${num}</td>`;
            num += row;
        }
        tbl += `</tr>\n`;
    }
    tbl += `</table>`;

    console.log(tbl);
}

multyTable(5);


// syzdava tr - red
// vtori cikal za kolonite th/td. pyrvo <th> posle i </th> i se uveli4ava kato se sybira sys sebe si
