// Implement your own Power function, recursively

function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent % 2 === 0) return power(base * base, Math.floor(exponent / 2));
    return base * power(base, exponent - 1);
}

console.log(power(2, 16));