function invDigits(k) {
    let result = 0;

    while (k >= 1) {
        let lastDigit = k % 10;
        
        k -= lastDigit;
        k /= 10;

        result *= 10;
        result += lastDigit;
    }

    return result;
}

console.log(invDigits(123));
console.log(invDigits(50));
console.log(invDigits(73));
console.log(invDigits(0));
console.log(invDigits(11223344));