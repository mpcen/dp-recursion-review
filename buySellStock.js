/**
 * Given an array which the ith element is the price of a given stock on day i,
 * if you are permitted to complete at most 1 transaction, what is the max profit you can gain?
 * you have to buy before selling (no shorting).
 * 
 * Ex: Given prices = [8,1,2,4,6,3], maxProfit = 5
 */

// Naive solution O(n^2)
function naive(prices) {
    let profit = 0;

    for(let i = 0; i < prices.length - 1; i++) {
        let curr = prices[i];

        for(let j = i + 1; j < prices.length; j++) {
            curr = prices[j] - prices[i];

            if(curr > profit) profit = curr;
        }
    }

    return profit;
}

