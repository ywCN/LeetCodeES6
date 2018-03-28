/**
 * Given a collection of candidate numbers (C) and a target number (T), find
 * all unique combinations in C where the candidate numbers sums to T.
 *
 * Each number in C may only be used once in the combination.
 *
 * Note:
 * 		All numbers (including target) will be positive integers.
 *   	The solution set must not contain duplicate combinations.
 *
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set 10,1,2,7,6,1,5 and target 8,
 * A solution set is:
 * [[1, 7],
 * [1, 2, 5],
 * [2, 6],
 * [1, 1, 6]]
 */
/**
 * Time: O(k*2^n), Space: O(n)
 * can reuse? has dup?
 * https://github.com/Deadbeef-ECE/Interview/blob/master/Leetcode/BackTracking/040_Combination_Sum_II.java
 * result may be formed by any number of elements in C(n,0) ~ C(n,n),
 * C(n,0) + C(n,1) + C(n,2) + ... C(n,n) = 2^n, O(k) copy in each combination, so O(k*2^n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (nums, target) => {
  const res = [];
  if (!nums || !nums.length) return res;
  const temp = [];
  nums.sort((a, b) => a - b);
  dfs(res, temp, nums, target, 0);
  return res;
};

// DFS. try to reduce remain from target to 0
const dfs = (res, temp, nums, remain, start) => {
  if (remain < 0) {
    return;
  } else if (remain === 0) {
    res.push([...temp]);
    return;
  } else {
    for (let i = start; i < nums.length; i++) {
      if (remain < nums[i]) return;
      if (i > start && nums[i] === nums[i - 1]) continue; // skip dup
      temp.push(nums[i]);
      dfs(res, temp, nums, remain - nums[i], i + 1); // i+1 for cannot reuse num on same index
      temp.pop();
    }
  }
};

// new file: 3/28/2018
