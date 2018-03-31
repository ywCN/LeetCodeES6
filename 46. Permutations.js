/**
 * Given a collection of DISTINCT numbers, return all possible permutations.
 *
 * For example,
 * [1,2,3] have the following permutations:
 * [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
 */
/**
 * https://github.com/Deadbeef-ECE/Interview/blob/master/Leetcode/BackTracking/046_Permutations.java
 * O(n*n!) time: number of answers: n!, length of each answer: n, so O(n*n!) running time
 *      Array.includes() costs O(n), so can use Set to reduce complexity
 * O(n) space:one n for recursion stack, one n for status bool array, one n for new array list?
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const res = [];
  // no need to sort nums because all numbers are distinct
  dfs(res, [], nums);
  return res;
};

const dfs = (res, temp, nums) => {
  if (temp.length === nums.length) {
    res.push([...temp]);
    return; // optional optmization
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) continue;
    temp.push(nums[i]);
    dfs(res, temp, nums);
    temp.pop();
  }
};

// new file: 3/30/2018
