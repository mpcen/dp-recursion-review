/*
Given a rod of length n and prices P[i] for i=1, ..., n, where P[i] is the
price of a rod of length i. Find the MAXIMUM total revenue you can
make by cutting and selling the rod.
*/

// O(2^n)
function revenues(n, prices) {
    if (n === 0) return 0;

    let max = -1;

    for (let i = 0; i < n; i++) {
        const tmp = prices[i] + revenues(n-i-1, prices);

        if (tmp > max) max = tmp;
    }

    return max;
}
const prices = [1, 5, 8, 9, 10];
console.log(revenues(prices.length, prices));

// O(n^2)
function revenues2(n, prices) {
    const R = [0];

    for(let i = 1; i <= n; i++) {
        let max = -1;

        for(let j = 1; j <= i; j++) {
            let current = prices[j-1] + R[i-j]
            if(current > max) max = current;
        }

        R[i] = max;
    }

    return R[n];
}

const prices = [1, 5, 8, 9, 10];
console.log(revenues2(prices.length, prices));