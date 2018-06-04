function pointA(x, y, xMin, xMax, yMin, yMax) {
    if ((x >= xMin) && (x <= xMax) && (y >= yMin) && (y <= yMax))
        console.log('inside');
    else
        console.log('outside');

    console.log(` SLOUTION ${x} >= ${xMin}\n
    ${x} <= ${xMax}\n
    ${y} >= ${yMin}\n
    ${y} <= ${yMax}\n
    END SOLUTION`)
} // В Джъджа не работи понеже ни дават масив от числа, а не отделни променливи.

function pointB(input) {
    /*let x = input[0];
    let y = input[1];
    let xMin = input[2];
    let xMax = input[3];
    let yMin = input[4];
    let yMax = input[5];
*/
    let [x, y, xMin, xMax, yMin, yMax] = input;
    if ((x >= xMin) && (x <= xMax) && (y >= yMin) && (y <= yMax))
        console.log('inside');
    else
        console.log('outside');
    
}

pointA(8, -1, 2, 12, -3, 3);
pointB([8, -1, 2, 12, -3, 3]);