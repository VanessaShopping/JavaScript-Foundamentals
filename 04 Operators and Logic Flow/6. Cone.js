function cone(r, h) {
    let v = (Math.PI * (r**2) * h) / 3;
    let s = Math.sqrt(h**2 + r**2);
    let a = Math.PI * r * s + Math.PI* r**2;
    console.log(v);
    console.log(a);
}

cone(3,5);