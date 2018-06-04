function solve([rows, cols, x,y]) {
    [rows, cols, x,y] = [rows, cols, x,y].map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }
    let num = 1;

    matrix[x][y] = num;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    while(true){
        let isFilled = false;
        num++;
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(matrix.length-1, currentRow+counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(matrix[0].length-1, currentCol+ counter);

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if(matrix[row][col] === 0){
                    matrix[row][col] = num;
                    isFilled = true;
                }
            }
        }
        counter++;
        if(!isFilled){
            break;
        }
    }
    console.log(matrix.map(row=>row.join(' ')).join('\n'));
}



/* НЕ РАБОТНИ В ДЖЪДЖ
function orbit(input) {

    let[rows, cols] = input[0].split(' ').map(Number);
    let [starRow, starCol] = input[1].split(' ').map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++){
        matrix.push([]);
        for (let j = 0; j < cols; j++){
            matrix[i].push(0);
        }
    }

    let element = 1;
    // Fill star cell
    matrix[starRow][starCol] = element;

    let startRow = starRow - 1;
    let startCol = starCol - 1;
    let endRow = starRow + 1;
    let endCol = starCol + 1;

    while (startRow >= 0 || startCol >= 0 || endRow <= matrix.length - 1 || endCol <= matrix[0].length){
        element++;
        if (startRow >= 0){
            matrix[startRow].fill(element);
        }
        if (endRow <= matrix.length - 1){
            matrix[endRow].fill(element);
        }

        if (startCol >= 0){
            let sR = Math.max(startRow, 0);
            let eR = Math.min(endRow, matrix.length - 1);
            for (let r = sR; r <= eR; r++){
                matrix[r][startCol] = element;
            }
        }

        if (endCol <= matrix[0].length - 1){
            let sR = Math.max(startRow, 0);
            let eR = Math.min(endRow, matrix.length - 1);
            for (let r = sR; r <= eR; r++){
                matrix[r][endCol] = element;
            }
        }

        startRow--;
        startCol--;
        endRow++;
        endCol++;
    }

    console.log(matrix.map(
        row => row.join(' ')
    ).join('\n'));
}
orbit(['3 3','2 2']);
orbit(['4 4','0 0']);
orbit(['5 5','2 2']);*/
