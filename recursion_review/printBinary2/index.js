// Given a number n, print all of the binary numbers that lead up to it, recursively.
// Ex:
// Given 4:
/*
OUTPUT:
0000
0001
0010
0011
0100
0101
0110
0111
1000
1001
1010
1011
1100
1101
1110
1111
*/

function printAllBinary(n, binStr = '') {
    if (n === 0) {
        console.log(binStr);
    } else {
        printAllBinary(n - 1, binStr + '0');
        printAllBinary(n - 1, binStr + '1');
    }
}

printAllBinary(4);