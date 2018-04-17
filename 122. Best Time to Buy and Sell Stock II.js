/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 * (ie, buy one and sell one share of the stock multiple times). However, you may not engage in
 * multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */
/**
 * Greedy. Whenever profitable, sell.
 * Note some companies may say there is a transaction fee.
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    const curProfit = prices[i] - prices[i - 1];
    if (curProfit > 0) sum += curProfit;
  }
  return sum;
};

/**
 * Brute Force. time: O(n^n) Recursive function is called n^n times. space: O(n) depth of recursion.
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitB = prices => {
  const calculate = s => {
    if (s >= prices.length) return 0;
    let max = 0;
    for (let start = s; start < prices.length; start++) {
      let maxprofit = 0;
      for (let i = start + 1; i < prices.length; i++) {
        if (prices[start] < prices[i]) {
          let profit = calculate(i + 1) + prices[i] - prices[start];
          if (profit > maxprofit) maxprofit = profit;
        }
      }
      if (maxprofit > max) max = maxprofit;
    }
    return max;
  };

  return calculate(0);
};

const testPrices = [397, 6621, 4997, 7506, 8918, 1662, 9187, 3278, 3890];

console.log(maxProfit(testPrices));
console.log(maxProfitB(testPrices));

// new file: 4/17/2018
