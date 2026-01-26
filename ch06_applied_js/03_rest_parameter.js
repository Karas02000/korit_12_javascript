function sum1(x1, x2) {
    let y = x1 + x2;
    return y;
}

console.log(sum1(5, 7));

function sum2(x1, x2, x3, x4) {
    let y = x1 + x2 + x3 + x4;
    return y;
}

console.log(sum2(1, 2, 3, 4));

function sum3(...args) {
    let total = 0;
    for(let i of args) {
        total += i;
    }
    return total;
}

console.log(sum3(1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10));