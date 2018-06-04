function fill(rows, cols) {
    function isFilled(matrix) {
        for (let rows = 0; rows < matrix.length; rows++) {
            for (let cols = 0; cols < matrix[rows].length; cols++) {
                if(matrix[rows][cols] === 0){
                    return false;
                }
            }
        }
        return true;
    }

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }
    let currentRow = 0;
    let currentCol = 0;
    let num = 1;
    // fill Top
    while(!isFilled(matrix)){
        for(let i =currentCol; i<cols-currentCol; i++){
            matrix[currentRow][i] = num++;
        }
        //fill Right
        for(let i = currentRow+1; i<rows-currentRow; i++){
            matrix[i][cols-currentRow-1] = num++;
        }
        //fill Bottom
        for(let i=cols-currentCol-2; i>=currentCol; i--){
            matrix[cols-currentRow-1][i] = num++;
        }
        //fill Left
        for(let i = rows-currentRow-1; i > currentRow+1; i--){
            matrix[i-1][currentRow] = num++;
        }
        currentRow++;
        currentCol++;
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

/* НЕ РАБОТИ В ДЖЪДЖ
function spiralMatrix([input]) {

    let [maxRows, maxCols] = input.split(' ').map(Number);
    let matrix = [];
    for (let i = 0; i < maxRows; i++) {
        matrix.push([]);
        for (let j = 0; j < maxCols; j++) {
            matrix[i].push(0);
        }
    }
    let element = 0;
    let col = -1;
    let row = 1;

    while (element < maxRows * maxCols) {
        row--;
        col++;
        while (col < maxCols && matrix[row][col] == 0) { // хоризонтално напред
            element++;
            matrix[row][col] = element;
            col++;
        }
        col--;
        row--;
        while (row >= 0 && matrix[row][col] == 0) {
            element++;
            matrix[row][col] = element;
            row--;
        }
        row++;
        col--;
        while (col >= 0 && matrix[row][col] == 0) {
            element++;
            matrix[row][col] = element;
            col--;
        }
        row++;
        col++;
        while (row < maxRows && matrix[row][col] == 0) {//
            element++;
            matrix[row][col] = element;
            row++;
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

spiralMatrix(['5 5']);*/
