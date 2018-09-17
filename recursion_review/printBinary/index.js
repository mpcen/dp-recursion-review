// Print the binary representation of the given number, recursively

function printBinary(n, r = '') {
    if (n === 0) return '0';

    const remainder = n % 2;
    const result = Math.floor(n / 2);

    if (result > 0) {
        return printBinary(result, parseInt(remainder) + r);
    }

    if (result === 0) {
        return parseInt(remainder) + r;
    }
}

console.log(printBinary(3));