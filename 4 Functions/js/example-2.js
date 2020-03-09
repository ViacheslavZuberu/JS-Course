function countDigits(value) {
    let count = 0;

    while (value >= 1) {
        count++;
        value /= 10;
    }

    return count;
}

function addLeftDigit(d, k) {
    let digitsCount = countDigits(k);

    for (let i = 0; i < digitsCount; i++) {
        d *= 10;
    }

    return d + k;
}

console.log(addLeftDigit(5, 77));
console.log(addLeftDigit(1, 810));
console.log(addLeftDigit(0, 666));
console.log(addLeftDigit(7, 32173));
console.log(addLeftDigit(3, 0));