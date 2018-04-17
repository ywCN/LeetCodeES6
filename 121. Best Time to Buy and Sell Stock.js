/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (ie, buy one and sell
 * one share of the stock), design an algorithm to find the maximum profit.
 * Example 1:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 5
 * max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 * Example 2:
 * Input: [7, 6, 4, 3, 1]
 * Output: 0
 * In this case, no transaction is done, i.e. max profit = 0.
 */
/**
 * In fact, we are looking for max different between current min and current price.
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  if (!prices || !prices.length) return 0;
  let min = prices[0];
  let max = 0; // init 0 because we don't want to lose money
  for (let i = 1; i < prices.length; i++) {
    // starts at second price for caculating differences
    if (prices[i] < min) min = prices[i];
    else max = Math.max(prices[i] - min, max); // update current max different
  }
  return max;
};

/**
 * This question can be convert to Maximum Subarray problem.
 *  Maximum subarray problem
 *  In computer science, the Maximum Subarray problem is the task of finding the contiguous
 *  subarray within a one-dimensional array of numbers which has the largest sum.
 *  For example, for the sequence of values -2, 1, -3, 4, -1, 2, 1, -5, 4
 *  the contiguous subarray with the largest sum is 4, -1, 2, 1 with sum 6.
 *
 * Convert p to profits by p[i] - p[i-1].
 * In this question, the logic is to calculate the difference(p[i] - p[i-1])
 * of the original array, and find a contiguous subarray giving maximum profit.
 * If the maxCur falls below 0, reset it to zero.
 * 		so the formula is curMax = Math.max(0, curMax += p[i] - p[i - 1])
 *   	then max = Math.max(max, curMax);
 * Use this solution if given an Array of price changes. replace p[]-p[] with changes[]
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitB = prices => {
  let max = 0;
  let curMax = 0;
  for (let i = 1; i < prices.length; i++) {
    // i = 1 because below p[i - 1]
    curMax = Math.max(0, curMax + prices[i] - prices[i - 1]); // 0 means no buy no sell
    max = Math.max(max, curMax);
  }
  return max;
};

// new file: 4/17/2018
