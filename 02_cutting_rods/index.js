/*
Given a rod of length n and prices P[i] for i=1, ..., n, where P[i] is the
price of a rod of length i. Find the MAXIMUM total revenue you can
make by cutting and selling the rod.
*/

function revenues(n, prices) {
    if (n === 0) return 0;

    let max = -1;

    for (let i = 0; i < n; i++) {
        const tmp = prices[n - i - 1] + revenues(i, prices);

        if (tmp > max) max = tmp;
    }

    return max;
}

const prices = [1, 5, 8, 9, 10];
console.log(revenues(prices.length, prices));