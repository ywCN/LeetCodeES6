/**
 * Given an numsay of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9, return [0, 1].
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 */

/**
 * Questions to interviewer:
 * 1. duplicate numbers in Array? 
 * 2. one or many solutions? return type? [] or [[],[],[]...]
 * 3. return index or number? if return index, is it zero based? 
 * 4. Can I reuse same elements?
 */

/**
 * Hash Table. One-pass. O(n) Time. O(n) Space. 
 * assume one result
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (cache.has(target - nums[i])) {
      return [cache.get(target - nums[i]), i];
    } else {
      cache.set(nums[i], i);
    }
  }
  return [-1, -1];
};

/**
 * Brute Force. two for loops. O(n^2) Time. O(1) Space.
 * assume one result
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumA = (nums, target) => {
  let cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

/**
 * Sorting with Two Pointers. O(nlogn) Time. O(n) Space.
 * assume multiple results, return numbers, not indices
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumB = (nums, target) => {
  nums.sort((a, b) => a - b);
  let l = 0, r = nums.length - 1;
  const res = [];
  while (l < r) {
    if (nums[l] + nums[r] === target) {
      res.push([nums[l], nums[r]]);
      while (l < r && nums[l] === nums[l+1]) l++;
      while (l < r && nums[r] === nums[r-1]) r--;
      l++;
      r--;
    } else if (nums[l] + nums[r] > target) {
      r--;
    } else {
      l++;
    }
  }
  return res;
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 8));

console.log(twoSumA([2, 7, 11, 15], 9));
console.log(twoSumA([2, 7, 11, 15], 8));

console.log(twoSumB([2, 7, 11, -2], 9));
console.log(twoSumB([2, 7, 11, -2], 5));
console.log(twoSumB([2, 7, 11, -2], 8));

// new file: 3/22/2018