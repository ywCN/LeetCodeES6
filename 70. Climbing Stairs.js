/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * Dynamic Programming
 * One can reach ith step in one of the two ways:
 * 1. Taking a single step from (i-1)th step.
 * 2. Taking a step of 2 from (i-2)th step.
 * So, the total number of ways to reach ith is equal to sum of ways of reaching (i-1)th
 * step and ways of reaching (i-2)th step.
 * -> dp[i]=dp[i-1]+dp[i-2]
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  const ways = [0, 1, 2]; // init first 3 grids
  for (let i = 3; i < n + 1; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];
};
/**
 * DP. Space optimized.
 * @param {number} n
 * @return {number}
 */
const climbStairsB = n => {
  let a = 1;
  let b = 1;
  for (let i = 0; i < n; i++) {
    let temp = a;
    a += b;
    b = temp;
  }
  return b;
};
/**
 * Recursion with memoization. Bottom-up.
 * https://leetcode.com/articles/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const climbStairsC = n => {
  const memo = new Array(n + 1).fill(0);
  const helper = i => {
    if (i > n) return 0;
    if (i === n) return 1;
    if (memo[i] > 0) return memo[i];
    memo[i] = helper(i + 1, n, memo) + helper(i + 2, n, memo);
    return memo[i];
  };

  return helper(0);
};

// new file: 4/6/2018
