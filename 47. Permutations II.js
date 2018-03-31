/**
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 *
 * For example,
 * [1,1,2] have the following unique permutations:
 * [1,1,2], [1,2,1], and [2,1,1].
 */
/**
 * https://github.com/Deadbeef-ECE/Interview/blob/master/Leetcode/BackTracking/047_Permutations_II.java
 * O(n*n!) time: number of answers: n!, length of each answer: n, so O(n*n!) running time
 * O(n) space:one n for recursion stack, one n for status bool array, one n for created new array list?
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
  const res = [];
  nums.sort((a, b) => a - b); // sort to skip dups
  dfs(res, [], nums, new Array(nums.length).fill(false));
  return res;
};

const dfs = (res, temp, nums, used) => {
  if (temp.length === nums.length) {
    res.push([...temp]);
    return; // optional optmization
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue; // [i - 1] === [i] only works for sorted or distinct array elements
    used[i] = true;
    temp.push(nums[i]);
    dfs(res, temp, nums, used);
    used[i] = false;
    temp.pop();
  }
};

// new file: 3/31/2018
