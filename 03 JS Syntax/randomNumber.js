function prntRandNum() {
    let num = Math.round(Math.random() * 345454);
    document.body.innerHTML +=
        `<div>${num}</div>`;
}