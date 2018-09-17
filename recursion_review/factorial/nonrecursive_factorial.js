// 4! = 4*3*2*1=24

function factorial(n) {
    let result = 1;

    for (let i = n; i > 0; i--) {
        result *= i;
    }

    return result;
}

console.log(factorial(4));