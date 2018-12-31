/*
    Given a set of stairs with steps n, how many different ways can you get to step n
    by climbing only 1, 2 or 3 steps at a time?
*/


function climbStairs(n) { // runs in O(2^n)
    if (n === 1 || n === 2) return n;
    if (n === 3) return 4;

    return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3);
}

function climbStairs_memoized(n) { // runs in O(n)
    cache = new Map();
    cache.set(1, 1);
    cache.set(2, 2);
    cache.set(3, 4);

    if (cache.has(n)) return cache.get(n);

    for (let i = 4; i <= n; i++) {
        cache.set(i, cache.get(i - 1) + cache.get(i - 2) + cache.get(i - 3));
    }

    return cache.get(n);
}

console.log(climbStairs(40));
console.log(climbStairs_memoized(40));