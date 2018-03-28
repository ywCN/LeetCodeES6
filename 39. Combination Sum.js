/**
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T),
 * find all unique combinations in C where the candidate numbers sums to T.
 *
 * The same repeated number may be chosen from C unlimited number of times.
 *
 * Note:
 * 		All numbers (including target) will be positive integers.
 *   	The solution set must not contain duplicate combinations.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set 2,3,6,7 and target 7,
 * A solution set is:
 * [[7], [2, 2, 3]]
 */
/**
 * Time: (k*2^n), Space: O(n)
 * can reuse? has dup?
 * https://github.com/Deadbeef-ECE/Interview/blob/master/Leetcode/BackTracking/039_Combination_Sum.java
 * {3,4,5}, target = 10 --> {3,3,3,3,4,4,4,5,5} can only use once, same complexity as II
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (nums, target) => {
  const res = [];
  if (!nums || !nums.length) return res;
  nums.sort((a, b) => a - b);
  backtrack(res, [], nums, target, 0);
  return res;
};

// try to reduce remain from target to 0
const backtrack = (res, temp, nums, remain, start) => {
  if (remain < 0) {
    return;
  } else if (remain === 0) {
    res.push([...temp]); // O(k) time to copy
  } else {
    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      backtrack(res, temp, nums, remain - nums[i], i); // i for we can use same num
      temp.pop();
    }
  }
};

// new file: 3/28/2018
