/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 *
 * Note:
 * You may not engage in multiple transactions at the same time (ie, you must sell before you buy again).
 */
/**
 * DP.
 * sell2: Final profit.
 * buy2: Best profit so far, if you buy the stock not after Day i (2nd transaction).
 * sell1: Best profit so far, if you sell the stock not after Day i (1st transaction).
 * buy1: Minimum price to buy the stock.
 *
 * The logic between buy1 and sell1 is to find a minimum price to buy and sell it in the future
 *
 * Now comes the trick. Assume you find a better deal at Day b, sell1 get updated. So you have 2 choice for buy2:
 *
 * not update buy2, you still sell your stock at Day a. Nothing changed.
 * update buy2 with new sell1, which means you sell the stock at Day b.
 * buy2 = sell1 - price[i] means you sell you stock at Day b and buy it at Day i.
 * And Day i is definitely not early than Day b, which is the hidden logic.
 * 1,1,5,1,5,10,5 => 13
 * day0:-1|0|-1|0 -> day1:-1|0|-1|0 -> day2:-1|4|-1|4 -> day3:-1|4|3|4
 * day4:-1|4|3|8 -> day5:-1|9|3|13 -> day6:-1|9|4|13 -> output
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let sell1 = 0;
  let sell2 = 0; // current cash on hand after selling, init at 0 for not losing money
  let buy1 = -Infinity;
  let buy2 = -Infinity; // current cash on hand after buying
  for (let price of prices) {
    buy1 = Math.max(buy1, -price); // no money, so borrow, max for borrow less
    sell1 = Math.max(sell1, buy1 + price); // return borrowed, max for more cash
    buy2 = Math.max(buy2, sell1 - price); // we now have cash of sell1, max for cheap stock
    sell2 = Math.max(sell2, buy2 + price); // max for sell higher price
  }
  return sell2;
};

/**
 * DP.
 * Goes forward to build single transaction max profit
 * Then goes backward to build max since day i profit
 * Find the max of the sum of these two
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitB = prices => {
  let maxProfit = 0;
  if (!prices || prices.length < 2) return maxProfit;
  const len = prices.length;
  const maxBy = new Array(len).fill(0);
  const maxSince = new Array(len).fill(0);
  let valley = prices[0];
  let peak = prices[len - 1];

  for (let i = 1; i < len; i++) {
    valley = Math.min(valley, prices[i]);
    maxBy[i] = Math.max(maxBy[i - 1], prices[i] - valley);
  }
  // update maxProfit while build maxSince //
  for (let i = len - 2; i >= 0; i--) {
    peak = Math.max(peak, prices[i]);
    maxSince[i] = Math.max(maxSince[i + 1], peak - prices[i]);
    // find i such that maxBy[i]+maxSince[i+1] is the max two-transaction profit, no overlap
    maxProfit = Math.max(maxProfit, maxBy[i] + maxSince[i]);
  }
  return maxProfit;
};

// new file: 4/17/2018
