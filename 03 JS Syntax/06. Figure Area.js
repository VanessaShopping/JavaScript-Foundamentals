'use strict';
function area(w, h, W, H) {
    let figureOne = w * h;
    let figureTwo = W * H;
    let totalArea = figureOne + figureTwo;
    let a = 0;
    let b = 0;
    let generalFigure = 0;
    let result = 0;
    if (w <= W) {
        a = w;
    } else {
        a = W;
    }
    if (h <= H) {
        b = h;
    } else {
        b = H;
    }
    generalFigure = a * b;
    result = totalArea - generalFigure;
    console.log(result);
}

area(13,2,5,8);

function areaSecondSolution(w, h, W, H) {
    let [s1, s2, s3] = [w*h, W*H, Math.min(w,W) * Math.min(h,H)];
    console.log(s1+s2-s3);
}

areaSecondSolution(13,2,5,8);